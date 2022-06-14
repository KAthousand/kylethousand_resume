import fs from 'fs'

const data = fs.readFileSync( "./kylethousand_resume.json",
  {encoding: "utf8", flag: "r"}, (err, data) => { 
    if ( err )
      console.log( err )
    else ( data )
      return data
  })

fs.writeFile( "kylethousand_resume.json", data, "utf8", ( err ) => {
    if (err) {
      console.log( error )
    } else {
      console.log( fs.readFileSync( "kylethousand_resume.json", "utf-8" ) );
    }
  }
);
