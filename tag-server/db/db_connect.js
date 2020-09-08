const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/tagdb',{ useNewUrlParser: true , useUnifiedTopology: true})

var conn =mongoose.connection
conn.on('connected',function (){
    console.log("connected!")
})