import {downloadFile} from './download-file.js'

let url = `http://archive.phonetics.ucla.edu/Language/BXM/bxm.xml`

console.log(`downloadingâ€¦ ` + url)
await downloadFile(url, './bxm.xml')
