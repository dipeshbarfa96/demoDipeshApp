const express = require('express')
const cors = require('cors')

const app = express()

// var corOptions = {
//     origin: 'https://localhost:8081'
// }

// routers

const router = require('./routes/productRouters.js')

  
// middleware

app.use(express.json());
app.use(cors())
app.use('/api/products', router)




// port

const PORT =  8080



// server

app.listen(PORT, () =>{
    console.log(`server is running in port ${PORT}`)
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});