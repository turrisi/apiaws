"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var key = "AKIAY74DF3JTFUGFP5OT";
var secret = "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";
var bucket = {
  Bucket: "aluxion-testing"
};
var s3 = new _awsSdk["default"].S3({
  accessKeyId: key,
  secretAccessKey: secret
}); // /* crear objeto*/
// async function leer(file) {
//     return fs.readFileSync(file, (error, data) => {
//         error ? console.log(error) : data
//     })
// }
// var body = await leer('./Notas-back.txt')
// var params = {
//     Body: body,
//     Bucket: bucket.Bucket,
//     Key: "/Notas-back.txt"
// };
// s3.putObject(params, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log('response: ', data);
// })

/* Para eliminar objetos */
// var params = {
//     Bucket: bucket.Bucket,
//     Key: "/Notas-back.txt"
// };
// s3.deleteObject(params, function (err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data, "Element succesfuly deleted");           // successful response
// });

/* descargar el objeto */
// var getObjectParam = {
// 	Bucket: bucket.Bucket,
// 	Key: params.Key
// }
// console.log(params.Key)
// // s3.getObject(getObjectParam, (err, data) => {
// // 	if (err) throw err;
// // 	console.log(data)
// /*Hasta acá se obtiene la info del objeto(entero, con todas las propiedades)*/
// 	// fs.writeFile("nombreObjeto", data.Body, "binary",(err)=>{
// 	// 	if (err) throw err;
// 	// 	console.log("imagen guardada en dispositivo local")
// 	// })
// /*En éste último paso se guarda el archivo en el disco local. El archivo en sí está dentro de la propiedad 'Body' del objeto*/
// // })

/* listar objetos */

s3.listObjects(bucket, function (err, data) {
  if (err) throw err;
  console.log(data);
});
/* Obtener location del bucket */
// var params = {
//     Bucket: "aluxion-testing",
//     ExpectedBucketOwner: "xmxSJYIkgQdzhl4YIgbbWOjphShhHbBT/l1ra/Xy"
// };
// s3.getBucketLocation(bucket, function (err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else console.log(data);           // successful response
// });