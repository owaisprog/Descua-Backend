const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 7000



app.use(express.urlencoded({extended:true}))
app.use(express.json())

 
app.use(cors())

// dbConnection 
const sequelize = require('./config/configuration')

// importing routes
const routes  = require('./routes/routes')

// set router middleware
app.use('/api',routes)


app.get('/',(req,res)=>{
    res.send("helllo")
})


sequelize.sync().then(()=>{
    console.log("Database connected...")
    app.listen(PORT,()=>{
        console.log(`server is running on http://localhost:${PORT}`)
    })
})

