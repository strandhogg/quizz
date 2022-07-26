let csvToJson = require('convert-csv-to-json');

let fileInputName = 'src/data/Pre_Post_Test.csv'; 
let fileOutputName = 'src/data/questions.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

let json = csvToJson.getJsonFromCsv("src/data/Pre_Post_Test.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}