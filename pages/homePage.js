import Page from './page';

class HomePage extends Page {
    
    get title()           { return $('title'); }

    get homeTitle()       { return browser.element('.home-title'); }
    
   
}

export default new HomePage();