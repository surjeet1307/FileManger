const fs=require('fs');
const path=require('path');
 function treeFn(pathAdd){
    
    if(pathAdd==undefined){
        console.log('Enter a Path Address');
        return;
    }
    else{
        let pathValid=fs.existsSync(pathAdd)
        if(pathValid==true){
            treeHelper(pathAdd,' ');
        }
    }
 }

 function treeHelper(targetAdd, indent){
   let isfile= fs.lstatSync(targetAdd).isFile();
   if(isfile==true){
      let filename=path.basename(targetAdd)
      console.log(indent+" ├── "+filename);
   }
   else{
       let dirname=path.basename(targetAdd)
       console.log(indent+" └── "+dirname);
       let childPath=fs.readdirSync(targetAdd)
       
       for(let i=0;i<childPath.length;i++){
           let child=path.join(targetAdd,childPath[i])
           treeHelper(child,indent+'\t')
       }
   }
 }
 module.exports={
     treeKey:treeFn,
 }