const knex= require("knex");
const db= knex({
    client:'mysql2',
    connection:{
    host: 'mysql', //Nombre del servico de docker-compose.yml
    user:'user_marketplace',
    password:'54321',
    database: 'marketplace'
    }
});

module.exports=db;