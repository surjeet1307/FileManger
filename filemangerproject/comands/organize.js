const fs=require('fs');
const path=require('path');
function organizer(pathAdd){
    let pathjoin
if(pathAdd==undefined){
    console.log('Enter a Path Address');
    return;
}
let pathValid=fs.existsSync(pathAdd)
if(pathValid==true){
pathjoin=path.join(pathAdd,'Organize_file')
if(fs.existsSync(pathjoin)==false){
    fs.mkdirSync(pathjoin)
}else{
    console.log("Folder Already Exist");
}
}else{
    console.log("Enter a valid Path adrres")
}
 organizeHelper(pathAdd,pathjoin)
}

function organizeHelper(src,des){
    let chidpath=fs.readdirSync(src)
    // console.log(chidpath);
    for(let i=0;i<chidpath.length;i++){
        let childAdrr=path.join(src,chidpath[i])
        let isFile=fs.lstatSync(childAdrr).isFile();
        if(isFile==true){
            let fileExt=getExt(childAdrr)
            console.log(chidpath[i]+" is belong to "+fileExt);
            sendFiles(childAdrr, des , fileExt)
        }
    }
}
function getExt(filename){
    let ext=path.extname(filename).slice(1);
    
    
    for(let key in types){
        let cTypearr= types[key];
        for(let i=0;i<cTypearr.length;i++){
            if(ext==cTypearr[i]){
                return key;
            }
        }
    }
    return "others";
}
function sendFiles(srcFilePath , dest , fileCategory){
    // we will create path for each category type encountered to create folders of their names
       let catPath = path.join(dest , fileCategory)
 
        //D:\FJP4\test folder\organized_files\media
        //D:\FJP4 \test folder\organized_files\documents
 
 
       if(fs.existsSync(catPath)==false){
         fs.mkdirSync(catPath)
       }
 
 
       let fileName = path.basename(srcFilePath)
 
       // we took out the basename of all the files
 
       let destFilePath = path.join(catPath , fileName)
 
 
       fs.copyFileSync(srcFilePath , destFilePath)
 
       fs.unlinkSync(srcFilePath)
 
 
       console.log('Files Organized')
 
 }


 module.exports={
     organizeKey:organizer,
 }