import { PrismaClient } from "@prisma/client";
import AWS from 'aws-sdk'
import { json } from "express";
import { filesToDb, leer, deleteFileDb, updateFileDb } from '../helpers/files/index.js';


const key = process.env.key
const secret = process.env.secret
const bucket = {
    Bucket: process.env.bucket
}

const s3 = new AWS.S3({
    accessKeyId: key,
    secretAccessKey: secret
});

const prisma = new PrismaClient();

export const getAllFiles = async (req, res) => {
    s3.listObjects(bucket, (err, data) => {
        if (err) throw err;
        console.log(data)
        res.json(data.Contents)
    })
}

export const uploadFiles = async (req, res) => {
    const { path } = req.body;

    var file = path.split('/').pop();
    var body = await leer(path)

    var params = {
        Body: body,
        Bucket: bucket.Bucket,
        Key: "/" + file
    };

    s3.putObject(params, async(err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            const localDb = filesToDb(params.Key).then(
            localDb
                ? res.json({ message: 'File Uploaded' })
                : res.json({ message: "Error updating DB" }))
        }
    })
}

export const deleteFiles = async (req, res) => {
    const { name } = req.body;


    var params = {
        Bucket: bucket.Bucket,
        Key: name
    };
    s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            const localDb = deleteFileDb(params.Key).then(
            localDb
                ? res.json({ message: `File Deleted, file ${name} deleted from bucket` })
                : res.json({ message: `Error updating DB, file ${name} deleted from bucket` }))
        }
    });
}

export const renameFiles = async(req, res) => {

    const { name, newName } = req.body;

    // var file = name.split('/').pop();

    var params = {
        Bucket: bucket.Bucket,
        CopySource: "/" + bucket.Bucket + "/" + name,
        Key: newName
    };
    console.log(params.CopySource)
    s3.copyObject(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);
    });

    params.Key = name
    s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else res.json(data);  // successful response
    });

    const localDb = await updateFileDb(name, newName)
    localDb
        ? res.json({ message: `File ${name} renamed to ${newName}` })
        : res.json({ message: `Error updating DB` })
}