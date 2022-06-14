#! /usr/bin/env node

const fs = require('fs')

fs.readFile(__dirname + '/kylethousand_resume.json', 'utf8',
  (err, data) => { 
    if (err)
      console.log(err)
    else (data)
    console.log(data)
    return data
  })
