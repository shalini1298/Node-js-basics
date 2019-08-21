var fs=require("fs");
fs.readFile('new.txt',function(err,data){
    if(err) return console.error(err);
    return console.log(data.toString());
});
console.log("Program ended");