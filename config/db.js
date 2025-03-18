import mongoose from "mongoose"

export default function configureDB(){
mongoose.connect('mongodb://127.0.0.1:27017/ecom-assignment')
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('error connecting to db',err)
})
}
