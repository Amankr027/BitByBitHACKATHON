const {MongoClient}=require("mongodb"); 
const url="mongodb://127.0.0.1:27017?directConnection-true"; 
const client=new MongoClient(url);

const database="Dis";
 async function getData(){

let results= await client.connect();
 let db =result.db(database);

let collection =db.collection("bcde");
 let response=await collection.find({symp:"fever"}).toArray(); }

console.log(response);

getData();