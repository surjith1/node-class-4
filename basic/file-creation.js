const fs = require("fs");
// let  quote ="No Beauty shines brighter than that od good heart"
// fs.writeFile("./awesome.html",quote,(err)=> {
//     console.log("Completed writing!")
// })

// // Task 1:

// let quote2 = "Live more, worry less";
// for(let i=1;i <= 10;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote2, (err)=> {
//         console.log(`created-{i`);
//     })
// }

// // Task 2: Page CREATED WITH USER SPECIFIED RANGE

// let n1=+process.argv[2];
// let quote3 = "Live more, worry less";
// for(let i=11;i <= n1;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote3, (err)=> {
//         console.log("created-",i);
//     })
// }
// console.log(process.argv);

// READ FILE
// fs.readFile("./reading.txt", "utf8", (err,data)=> {
//     if (err) {
//         console.log("something went wrong",err)
//     }
//     else {
//         console.log(data);
//     }
// });

// let name="\n by surjith";
// fs.appendFile("./reading.txt", name,  (err)=> {
//         console.log("something went wrong",err)
    
// });

fs.unlink("./delete-file.css", (err)=> {
    if(err) {
        console.log("File doesnot exist",err);
    }
    else {
        console.log("deleted files")
    }
})