const express = require('express')

const path=  require('path')
const app = express()
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '1c942b239d624161a29b13c93e79a806',
    captureUncaught: true,
    captureUnhandledRejections: true,
})
rollbar.log('Hello world!')

app.use(express.static(`${__dirname}/../public`))


app.get('/', (req,res) => {
    // console.log(__dirname)
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
  
})

app.get('/css', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }


app.listen(4000, () => console.log(`server running on 4000`))

