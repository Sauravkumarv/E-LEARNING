import express, { json, urlencoded } from 'express'
import { dbConnect } from './config/dbConnect.js';
import router from './routes/user.js';

const app=express();
dbConnect();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// app.use('/',(req,res)=>{
//   res.send("Hey Health Check Goood")
// })
app.use("/api",router)

const port=process.env.PORT ||5000

app.listen(port,()=>{
  console.log(`We are connected in http://localhost:${port}`)
})