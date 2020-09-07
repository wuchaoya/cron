import {exec} from 'child_process';
import * as fs from 'fs';

export default function updateJsonData () {
  
  console.log(__dirname);
  
  exec(`sh ${__dirname}/../sh/update.sh`,function (error: Error, stdout: string | Buffer, stderr: string | Buffer) {
    
    console.log(error || stderr || stdout );
  
    let fd = fs.openSync(`${__dirname}/../log/${new Date().toLocaleDateString().replace(/\//g,'-')+ '-' + new Date().toLocaleTimeString()}.txt`, 'w');
    fs.writeFileSync(fd, stdout, 'utf8');
    fs.closeSync(fd);
    
  });
  
}
