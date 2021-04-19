
async function connect() {
    console.log("entrou no connect");
    if (global.connection)
        return global.connection.connect();
  
    console.log("passou do if");
    const { Pool } = require('pg');
    console.log("passou da const");
    const pool = new Pool({
        connectionString: 'postgres://zkmzzlxa:AnuKA0kMhLOLTDJzaYlzzCaL3yTPnhzo@queenie.db.elephantsql.com:5432/zkmzzlxa'
    });
  
    console.log("passou da conexão");
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
  
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
  
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
  }
  
  async function selectAbrigos() {
    console.log('abriu o select');
    const client = await connect();
    const res = await client.query('SELECT * FROM abrigo');
    console.log("Final");
    return res.rows;
}

export default { selectAbrigos }
