
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import InputsPage from '../pages/inputsPage';

describe ('NAVIGATE through Internet app pages - ', () => {

    before(() => {
        HomePage.open();
    });

    it('Should check title of the page ', () => {
        expect(HomePage.getHeadingText()).to.equal('Welcome to the-internet');
    });

    it('Should access Inputs page ', () => {
        HomePage.clickOnLink('Inputs');
        expect(InputsPage.title.getText()).to.equal('Inputs');
    });

    it('Should access Authentication page ', () => {
        browser.back();
        HomePage.clickOnLink('Form Authentication');
        expect(LoginPage.title.getText()).to.equal('Login Page');
    });
});