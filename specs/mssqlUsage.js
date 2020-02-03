import Homepage from '../pages/homepage';
var encryptor = require('simple-encryptor')(browser.options.encryptionKey);
import DBHelper from '../databaseHelper/DBHelper';

describe ('Add your describe title', () => {

    before(() => {
        // the queries created in before() are ussualy for prerequisites that you need in your tests
        let prerequisiteQuery = browser.call(() => {
            // create your queries and execute them first in a proper IDE before adding them in your test
            let query = ("INSERT INTO dbo.Table1 \
	    				( OrganizationID , Name , GenderID , AgeDivisionID , CreatedDate , ModifiedDate , IsActive) \
                        VALUES  ( 85 , 'WorkshopItem' , 1 , 2 , GETDATE() , GETDATE() , 1)");
                        // use the escape character so that your queries are easy to read and fits properly
            
            let result = DBHelper.execute(query); // this calls the query execution
            return  result ;
        });

        console.log(prerequisiteQuery); // this will return the db affected rows in an array
        DBHelper.close(); // don't forget to call the close the function after each browser.call()
        
    });

    it ('Add the description of your specific test', () => {
        /*
            add your test steps 
        */

        });

    after (() => {

        // the queries created in after() are ussualy for clean-up purposes (this will execute wether your tests pass of fail)
        let postrequisiteQuery = browser.call(() => {
            // ALWAYS USE THE WHERE CLAUSE
            // you can concatenate multiple queries using the '+' character
            let query = ("DELETE FROM Table1 WHERE TeamID IN (SELECT TeamID FROM dbo.Team WHERE OrganizationID = 85)" +
                         "DELETE FROM dbo.Table2 \
                         WHERE TeamID IN ( SELECT TeamID FROM dbo.Team WHERE OrganizationID = 85)" + 
                         "DELETE  FROM dbo.Table3 WHERE OrganizationID = 85");
            
            let result = DBHelper.execute(query);
            return  result ;
        });
    
        console.log(postrequisiteQuery);// this will return the db affected rows in an array
        DBHelper.close(); // don't forget to call the close the function after each browser.call()
    });
    
});