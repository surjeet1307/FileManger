// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
const { dir } = require('console');
const help=require('../comands/help')
const organize=require('../comands/organize')
const tree=require('../comands/tree')

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };

let input =process.argv.slice(2);
let command=input[0]

switch (command) {
    case 'tree':
        tree.treeKey(input[1])
        break;
    case 'organize':
        organize.organizeKey(input[1])
        break;
    case 'help':
        help.helpKey();
        break;    
    default:
        console.log('Enter a valid Input');
        break;
}




