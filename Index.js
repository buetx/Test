const express = require("express");
const cors = require("cors");
const  fetch =require('node-fetch')
const bodyParser=require('body-parser') 


let chrome = {};
let puppeteer;


if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

const app = express();
const PORT = 3000;

app.listen(process.env.PORT || 8000, () => {//    console.log(`Server is running on PORT: ${PORT}`);
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
// app.set('trust proxy', true)
// app.use(express.json())
app.use(bodyParser.text({ type: "*/*" }));


app.get('/links',async (req,res)=>{
  res.send('888jj')
})



