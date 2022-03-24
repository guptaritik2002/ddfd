#!/usr/bin/env node 
let inputarray = process.argv.slice(2);
let path = require("path");
let fs = require("fs");
let helpObject= require("./commands/help");
let treeObject=require("./commands/tree");
let organizeObject=require("./commands/organize");
// console.log(inputarray);
let command = inputarray[0];
types = {
  media: ["mp4", "mkv"],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', "deb"],
  images: ["jpg", "png"]
};

switch (command) {
  case "tree":
    treeObject.treekey(inputarray[1]);
    break;
  case "organize":
    organizeObject.orgkey(inputarray[1]);

    break;

  case "help":
    helpObject.helpkey();
    break;

  default:
    console.log("please🙏input correct command");
    break;
}
