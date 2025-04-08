import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import encrypt from "./passwordManager/encryption.js"
import decrypt from "./passwordManager/decryption.js"
import connectDb from "./config/db.js"
import user from "./Models/userModel.js"

const app = express();
app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173",
  credentials: true, 
}));

dotenv.config();
connectDb()

app.get("/", (req, res)=>{
  res.send("API is running");
});

app.post("/api/signup", async (req, res)=>{
  let {email, password} = req.body;

  try{

    const hashedPassword = await encrypt(password);
    const result = await user.create({email : email, password : hashedPassword});
    res.status(200).json({message:"success"});

  }catch(error){

    if(error.code == 11000 && error.keyValue.email ){
      return res.status(500).json({message:"email already exists!"});
    }

    res.status(500).json({message:"Some issue in creating account!"});
  }
  return;
});

app.post('/api/login', async (req, res) => {

  let { email, password } = req.body;
  email = email.trim()
  password = password.trim()

  try {
      const result = await user.findOne({ email: email});
      if(!result){
        return res.status(401).json({ message: 'email not found!' });
      }

      const checkPassword = await decrypt(password, result.password);

      if (checkPassword) {
        res.status(200).json({message:"success"});
      } else {
          res.status(401).json({ message: 'Invalid email or password' });
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error'});
  }
});


app.listen(5001, ()=>{
  console.log("server started: http://localhost:5001");
});