const fs = require('fs-extra')

const folder = 'pasta1'

fs.remove(folder, (err) => {
    console.log(err)
})