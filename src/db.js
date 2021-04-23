// import { parseURL } from 'pg-adapter';
// import { Adapter } from 'pg-adapter'

// async function connect() {
//     console.log("entrou no connect");
//     if (global.connection)
//         return global.connection.connect();
  
//     console.log("passou do if");
//     //const { Pool } = require('pg').Pool; //usar socket? socket-adapter-postgres?
//   //  const { Adapter } = require('pg-adapter')
//     // const { Pool, Client } = require('pg')
//     // const Native = require('pg').native
//     console.log("passou da const");
//     //const config = parseURL('postgres://zkmzzlxa:AnuKA0kMhLOLTDJzaYlzzCaL3yTPnhzo@queenie.db.elephantsql.com:5432/zkmzzlxa');
//     console.log("passou da url");
    
//     // const db = Adapter.fromURL(
//     //     'postgres://zkmzzlxa:AnuKA0kMhLOLTDJzaYlzzCaL3yTPnhzo@queenie.db.elephantsql.com:5432/zkmzzlxa',
//     //     {pool: 5}
//     // );
//     // const db = new Adapter.fromURL(
//     //     'postgres://user:password@host:port/database',
//     //     { pool: 5, log: false } // second argument for options
//     //   )
//     const db = new Adapter({
//         host: 'queenie.db.elephantsql',
//         port: 5432,
//         database: 'zkmzzlxa',
//         user: 'zkmzzlxa',
//         password: 'AnuKA0kMhLOLTDJzaYlzzCaL3yTPnhzo',
//         pool: 10,
//         log: true,
//       })
      
      

  
//     console.log("passou da conexão");
//     //apenas testando a conexão
//     const client = await db.connect();
//     console.log("Criou pool de conexões no PostgreSQL!");
  
//     const res = await client.query('SELECT NOW()');
//     console.log(res.rows[0]);
//     client.release();
  
//     //guardando para usar sempre o mesmo
//     global.connection = db;
//     return db.connect();
//   }
  
//   async function selectAbrigos() {
//     console.log('abriu o select');
//     const client = await connect();
//     const res = await client.query('SELECT * FROM abrigo');
//     console.log("Final");
//     return res.rows;
// }

// export default { selectAbrigos }
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: 'postgres://zkmzzlxa:AnuKA0kMhLOLTDJzaYlzzCaL3yTPnhzo@queenie.db.elephantsql.com:5432/zkmzzlxa'
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};