import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for food-supply-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be food-supply-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('food-supply-app');
    })
  });

  it('navbar-brand should be food-supply@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('food-supply@0.0.1');
  });

  
    it('ProductListingContract component should be loadable',() => {
      page.navigateTo('/ProductListingContract');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('ProductListingContract');
    });

    it('ProductListingContract table should have 6 columns',() => {
      page.navigateTo('/ProductListingContract');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  

});
