let encryptor = require('simple-encryptor')(browser.options.encryptionKey);
import DBHelperMySql from '../databaseHelper/DBHelper-MySql';
import page from '../pages/page';

describe ('Add your describe title', () => {

    before(() => {
        // the queries created in beforeAll() are ussualy for prerequisites that you need in your tests
        // create your queries and execute them first in a proper IDE before adding them in your test
        // use the escape character so that your queries are easy to read and fits properly
        let insertCustomer = "INSERT INTO `Customers` (`ID`,`CustomerKey`,`CustomerName`,`CustomerNumber`,`PhoneNumber`,\
                                                        `PurchasingContactName`,`PurchasingEmailAddress`) \
                              VALUES(1111111,2222222,'STN Automation',33333333,555555555,'STN testing','STN@test.com'); ";
        let insertStyle = "INSERT INTO `Styles` (`ID`,`STYLEKEY`,`CUSTKEY`,`STYLENO`,`CONSTRUCTION`,`itemno`,`IsSpecial`,`Type`) \
                            VALUES(9999999,9999999,1111111,'S-20180629-9999','automated test','6666666',0,'automation by sql style');";
        let listOfQueries = [insertCustomer, insertStyle];
        let queriesResults = DBHelper.executeMultipleQueries(listOfQueries);
        let affectedRows = page.getAffectedRowsFromArray(queriesResults);
        console.log('Database rows afected by prerequisites: ' + affectedRows); // this calls the query execution and closes the connection
    });

    it ('Add the description of your specific test', () => {
        /*
            add your test steps 
        */

    });

    after (() => {
        // the queries created in after() are ussualy for clean-up purposes (this will execute wether your tests pass of fail)
        // ALWAYS USE THE WHERE CLAUSE
        let result = DBHelperMySql.executeSingleQuery("DELETE FROM Customers WHERE ID = 1111111");
        console.log('Rows afected in database clean-up: ' + result.affectedRows); // this will return the db affected rows in an array
    });
    
});