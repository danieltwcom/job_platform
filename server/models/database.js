const
    pg = require("pg");
    path = require("path");
    dotenv = require('dotenv').config({
        path: path.resolve(__dirname,"../../config",'.env')
    });
    
// PostgrSQL connection
let pool = new pg.Pool({
    user: process.env.PGSQL_USER,
    host: process.env.PGSQL_HOST,
    password: process.env.PGSQL_PASSWORD,
    database: process.env.PGSQL_DATABASE,
    max: process.env.PGSQL_MAX
});

module.exports = {
    query: function(text,values,callback){
        pool.connect(function(err,client,done){
            // TODO how to handle error here
            if(err){
                done();
                console.log(err);
                callback(err);
            }else{
                client.query(text,values,function(err,result){
                    if(err){
                        done();
                        console.log(err);
                        callback(err);
                    }else{
                        done();
                        callback(result);
                    }
                });
            }
        });
    }
}