
const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const { logging } = require(('./middleware'));
const { userRouter } = require(('./routes'));
const { initializeDB }= require ('./config/dbConfig');

const app = express();

app.use(bodyParser.json());
app.use(logging);

app.use('/user', userRouter);

(async ()=>{

   initializeDB();
   app.listen(PORT,()=>{
      console.log(
         `hello world!. Este es nuestro primer server. Escuchando en el puerto: ${PORT}`
         );
   })
})();







