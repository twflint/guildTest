import * as mainPage from '../support/page-objects/main-page';
import * as signInPage from '../support/page-objects/student-signup-page';
import * as getGuildPage from '../support/page-objects/get-guild-page';

describe('Smoke Test', () => {
  beforeEach(() => {
    cy.visit('');
  });
  describe('Verify main Page', () => {
    it('Check landing page', () => {
      mainPage.checkTopOfPage();
      mainPage.checkInnerButtonsAndVideos();
      mainPage.checkBottomOfPage();
    });

  });

  describe('Verify login/signup', () => {

    it('Signup with company not working', () => {
      // select company Union Pacific
      mainPage.clickStudentLogin();
      signInPage.selectWorkplace('Union Pacific');
      signInPage.clickNext();
      getGuildPage.verifyPage();
    })

    it('Signup with company working', () => {
      // select company Guild for Guilders
      mainPage.clickStudentLogin();
      signInPage.selectWorkplace('Guild for Guilders');
      signInPage.clickNext();
    });

    xit('perform create user', () => {

    });

    xit('perform login as new user', () => {

    });
  });

  describe('Check navigation', () => {

    it('Open For Employers - Platform', () => {
      // select company Guild for Guilders
      mainPage.forEmployers_Platform();
    });


    it('Open For Employers - Solutions', () => {
      // select company Guild for Guilders
      mainPage.forEmployers_Solutions();
    });


    it('Open For Learning Providers - Solutions', () => {
      // select company Guild for Guilders
      mainPage.forLearningProviders_LearningMarketplace();
    });
    

    it('Open For Learning Providers - Partner Programs', () => {
      // select company Guild for Guilders
      mainPage.forLearningProviders_PartnerProgram();
    });
    
    it('Open Resourcess - Blog', () => {
      // select company Guild for Guilders
      mainPage.resources_Blog();
      // verify Blog Page
    });
    
    it('Open Resourcess - Resource Center', () => {
      // select company Guild for Guilders
      mainPage.resources_ResourceCenter();
    // verify the Resource Center PAge
    });

    it('Open Resourcess - News & Press', () => {
      // select company Guild for Guilders
      mainPage.resources_NewsPress();
      // Verify the News and Press page
    });
  });

});