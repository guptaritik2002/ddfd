
let fs = require("fs");
let path = require("path");
function organizefn(dirpath) {
    // console.log(`organize fn  implemented `);
    // 1. input the directory path
    let destpath;
  
    if (dirpath == undefined) {
      console.log("🙏please enter the correct path ");
    } else {
      let doesexist = fs.existsSync(dirpath);
      if (doesexist) {
        // 2. create a organize folder
        destpath = path.join(dirpath, "organized_files");
        if (fs.existsSync(destpath) == false) {
          fs.mkdirSync(destpath);
        }
      } else {
        console.log("give the correct dirpath");
      }
    }
  
    // 3. put the files or media into relevant category .
    organizehelperfn(dirpath, destpath);
    // 4. implemeneted the function
  }
  
  function organizehelperfn(src, dest) {
    // 3. put the files or media into relevant category .
  
    //1st step for 3. it is to identtify the files in the dirpath that you want to organize for it we first have to get all the paths of the files in the directory and then by using lstat function we can tell what is the file and what is the folder .
  
    let childnames = fs.readdirSync(src);
  
    //  console.log(childnames);
    for (let i = 0; i < childnames.length; i++) {
      let childAddresses = path.join(src, childnames[i]); //jb path pta chalega tbhi to check karoge ki kaunsi file hai kaunsi nhi
      isFile = fs.lstatSync(childAddresses).isFile();
      //1st step for 3. it is to identtify the files in the dirpath that you want to organize for it we first have to get all the paths of the files in the directory and then by using lstat function we can tell what is the file and what is the folder .
      //done
      if (isFile) {
        //2nd step for 3 . is to  categorize the files on the basis of the extension and put them in their folder .
        //here above in if(is file ) we tried to know the category of the file done
        let category = getcategory(childnames[i]);
        // console.log(childnames[i],"-->",category);
  
        // 4.now we have to cut /copy the file the categorized files to the particular category folder
  
        sendfiles(childAddresses, dest, category);
      }
    }
  }
  
  function getcategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
      let ctypearray = types[type];
      for (let i = 0; i < ctypearray.length; i++) {
        if (ext == ctypearray[i]) {
          return type;
        }
      }
    }
    return "other type ";
  }
  
  function sendfiles(srcfilepath, dest, category) {
    // 4.now we have to cut /copy the file the categorized files to the particular category folder
    let categorypath = path.join(dest, category);
    if (fs.existsSync(categorypath) == false) {
      fs.mkdirSync(categorypath); //folder ka naam category ke naam se ban jayega kyonki path.join me specified hai
    }
  
    //a)implementing copy version first
    let filename = path.basename(srcfilepath); //empty file created of same name in categorypath
    let destfilepath = path.join(categorypath, filename); //we created path now for that empty file
    fs.copyFileSync(srcfilepath, destfilepath); //copy the content from originial file to duplicate file in category folder
  
    // b)cut vala version implement kr diya
    fs.unlinkSync(srcfilepath);
    //  console.log(filename ,"cut to ----->",category);
  }
  module.exports={
    orgkey:organizefn
  };
  