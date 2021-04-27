const app = require('./src/application');
const db = require("./database/config");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

mongoose.connect(db.uri, { useNewUrlParser: true }).then(()=>console.log("funcionou"));
app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});