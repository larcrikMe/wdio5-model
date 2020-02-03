let encryptor = require('simple-encryptor')(browser.options.encryptionKey); // used to decrypt the hashed password
let mySql = require('sync-mysql');

let connection;
let dbDetails = {
    host     : '', //server
    user     : browser.options.dbUser,
    password : encryptor.decrypt(browser.options.dbHashedPassword),
    database : ''
};

class DBHelper {

    openConnection() {
        connection = new mySql(dbDetails);
    }

    executeMultipleQueries(listOfQueries) {
        let results = [];
        this.openConnection();
        listOfQueries.forEach(q => {
            results.push(connection.query(q));
        });
          
        this.closeConnection();
        return results;
    }

    executeSingleQuery(myquery){
        this.openConnection();
        let result = connection.query(myquery);
        this.closeConnection();
        return result;
    }

    closeConnection(){
        connection.dispose();
    }
}

export default new DBHelper();