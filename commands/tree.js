let fs = require("fs");
let path = require("path");
function treefn(dirpath) {
    // console.log(`tree fn implemented `);
    // let destpath;
  
    if (dirpath == undefined) {
      // console.log("please enter the correct path ");
          process.cwd();
          treehelper( process.cwd(),"");
          return;
  
    } else {
      let doesexist = fs.existsSync(dirpath);
      if (doesexist) {
        treehelper(dirpath,"");
      } else {
        console.log("give the correct dirpath");
      }
    }
  }
  
  
  function treehelper(dirpath,indent)
  {
  // 1. first check whether file or folder 
    let isfile = fs.lstatSync(dirpath).isFile();
    if(isfile==true)
    {
       let filename=path.basename(dirpath);
       console.log(indent+"├──"+filename);
    }
    else
    {
     let dirname=path.basename(dirpath);
     console.log(indent + "└──"+dirname);
     //hmne abhi tak file or folder ka dhyan kar liya 
     //2.ab folder ke children ka dhayan rkhte hain 
     let childrens = fs.readdirSync(dirpath);
     for(let i=0;i<childrens.length;i++)
     {
      let childrenpath= path.join(dirpath,childrens[i]);
       treehelper(childrenpath,indent+"\t");
     }
  
    }
    
  
  }
  
  module.exports={
    treekey:treefn
  };