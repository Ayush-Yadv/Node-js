const fs = require("fs");

// Writing to a file
//fs.writeFileSync("./text.txt", "hello ayush radha ko pyre lage sabh ");

// Reading from a file
//const result = fs.readFileSync("./text.txt", "utf-8");
//console.log(result);

// Reading a directory
//const filesInDir = fs.readdirSync("./", "utf-8");
//console.log(filesInDir);
fs.readFile("text.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }
    else {
        console.log(result);
    }
})
 let result2=fs.readFileSync("creat.txt","utf-8")
 console.log(result2);
 //if you have creat any file from  server request 
 fs.writeFileSync("Data.txt","Email:anayayushyadav@gmail.com")