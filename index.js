const {MongoClient}=require("mongodb");
const url="mongodb://127.0.0.1:27017?directConnection=true";
const client=new MongoClient(url);

const database="Dis";

async function getData(){

   let result= await client.connect();
   let db = result.db(database);
   let collection =db.collection("abcd");
   let response=await collection.find({}).toArray();
   console.log(response);
}
getData()