const fs = require('fs')
const path = require('path')

// getting absolute path for intro file 

const intro_path = path.resolve(__dirname, 'folder', 'subfolder', 'intro.txt')

const intro_content = fs.readFileSync(intro_path)

console.log(`intro file content : ${intro_content}`);

// creating a log file and appending all the conversations in the file.

regards_content = fs.readFileSync(path.resolve(__dirname, 'regards.txt'))

log_file = path.resolve(__dirname, 'log.txt')

fs.writeFileSync(log_file, `Conversation : ${intro_content + regards_content}`)

// displaying the log file 

console.log(`Logs : ${fs.readFileSync(path.resolve(__dirname, 'log.txt'))}`);