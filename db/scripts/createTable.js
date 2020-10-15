 const { query }=require('../dbConnect');

 const sqlCreateTable = "CREATE TABLE scores (id SERIAL PRIMARY KEY, playername TEXT, "