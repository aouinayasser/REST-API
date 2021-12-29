const express=require('express')
const app=express()
const connectDB=require('./config/db')
const contactRoutes=require('./Routes/contact')

connectDB()

app.use(express.json())
app.use('/api/contacts',contactRoutes)
const port = 5000
app.listen(port,()=>console.log(`Server running on port ${port}`))