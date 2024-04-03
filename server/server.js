require("dotenv").config();
const express = require("express");
const connectdb = require("./utils/db");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const errorMiddleware = require("./middlewares/error-middleware");

// const { PythonShell } = require('python-shell');

// include before data getting/ handling cors policy error
const corsOptions = {
    origin:"http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

// app.get('/api/model', (req, res) => {
//     PythonShell.run('load_model.py', {
//         args: ['./careerlast.pkl'],
//         pythonOptions: ['-u'], // get print results in real-time
//         scriptPath: '/load_model.py',
//         pythonPath: 'C:\Users\Admin\AppData\Local\Programs\Python\Python39\lib\site-packages\sklearn\__init__.py'
//     }, function (err, results) {
//         if (err) throw err;
//         console.log('results:', results);
//     });

// });


const PORT = 5000;

connectdb().then(() => {
    app.listen(PORT,() =>{
        console.log(`server is running at port: ${PORT}`);
    })
    
})