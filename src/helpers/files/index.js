import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const leer = async (file) => {
    return fs.readFileSync(file, (error, data) => {
        error ? console.log(error) : data
    })
}

export const filesToDb = async (filename) => {
    try {
        await prisma.file.create({
            data: { name: filename }
        })
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const deleteFileDb = async (filename) => {
    try {
        await prisma.file.delete({
            where: { name: filename }
        })
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const updateFileDb = async (filename, newFileName) => {
    try {
        await prisma.file.update({
            where: { name: filename },
            data: { name: newFileName }
        })
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}