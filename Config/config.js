mongoose=require('mongoose')

mongoose.connect(process.env.MONG_URL,
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(()=>{
  console.log('connection succ')
})
.catch(()=>{
  (err=> console.log(err))
})



