import fs from 'fs'

const data = fs.readFileSync( "./kylethousand_resume.json",
  {encoding: "utf8", flag: "r"}, (err, data) => { 
    if ( err )
      console.log( err )
    else ( data )
      return data
  })

console.log(data)
