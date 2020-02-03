var encryptor = require('simple-encryptor')(browser.options.encryptionKey); // used to decrypt the hashed password

const sql = require('mssql');
const config = {
    user : browser.options.dbUser, // your database connection username
    password : encryptor.decrypt(browser.options.dbHashedPassword), // your database connection hashed password
    server : '', // the server name that hosts your database
    database : '' // your database name
};

class DBHelper {
    
    execute(myquery) {
        return sql.connect(config).then(pool => {
            return pool.request().query(`${myquery}`);
        }).then(result => {
            return result;
        }).catch(err => {
            console.error('The following error has occured: ' + err);
        });
    }
    
    close() {
        sql.close();
    }
}

export default new DBHelper();