const express = require('express')

const path=  require('path')
const app = express()
app.use(express.static(`${__dirname}/public`))


app.get('/', (req,res) => {
    // console.log(__dirname)
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/css', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})




app.listen(4000, () => console.log(`server running on 4000`))

