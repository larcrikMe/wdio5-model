
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

describe ('Check LOGIN page - ', () => {

    before(() => {
        HomePage.open();
    });

    it('Should get to Login page ', () =>{
        HomePage.clickOnLink('Form Authentication');
        HomePage.title.waitForExist();
        expect(LoginPage.title.getText()).to.equal('Login Page');
    });

    it('Should check login elements are present ', () => {
        LoginPage.userFld.waitForExist();
        expect(LoginPage.userFld.isDisplayed(), 'Username field is not present').to.be.true;
        expect(LoginPage.passFld.isDisplayed(), 'Password field is not present').to.be.true;
        expect(LoginPage.loginBtn.isDisplayed(), 'Login button us not present').to.be.true;
    });

    it('Check inputs fields are editable ', () => {
        LoginPage.loginWith('tomsmith', 'SuperSecretPassword!');
    });

    it('User should successfully login ', () => {
        LoginPage.loginBtn.click();
        expect(LoginPage.successMessage.getText()).to.include('You logged into a secure area');
    });
});