export function checkTopOfPage() {
  // cy.wait(5000);
  cy.get('.header__inner').within(() => {
    cy.contains('#menu-item-652', 'For Employers');
    cy.contains('#menu-item-1354', 'For Learning Providers');
    cy.contains('#menu-item-2394', 'Resources');
    cy.contains('#menu-item-653', 'About Us');
    cy.contains('#studentLogin', 'Student Login');

    // This one doesn't have an ID
    cy.contains('a.header__action', 'Student Signup');
    
  });
};

export function checkBottomOfPage() {
  cy.get('.footer').within(() => {
    cy.contains('#menu-item-2493', 'Platform');
    cy.contains('#menu-item-2492', 'Solutions');
    cy.contains('#menu-item-2490', 'Learning Marketplace');
    cy.contains('#menu-item-2491', 'Academic Partner Programs');
    cy.contains('#menu-item-2850', 'Interested Employer Partner');
    cy.contains('#menu-item-2904', 'Strategic Alliances');

    cy.contains('#menu-item-2488', 'Who We Are');
    cy.contains('#menu-item-2489', 'Leadership');
    cy.contains('#menu-item-3062', 'FAQs');
    cy.contains('#menu-item-2480', 'Careers');

    cy.contains('#menu-item-1889', 'Blog');
    cy.contains('#menu-item-2494', 'Resource Center');
    cy.contains('#menu-item-845', 'News & Press');
    cy.contains('#menu-item-2114', 'Events');

  });
};

export function checkInnerButtonsAndVideos() {
    cy.get('[href="https://www.guildeducation.com/solutions/"]');
    cy.get('[href="https://www.guildeducation.com/learning-marketplace/"]');
    cy.get('[href="https://www.guildeducation.com/platform/"]');
};

export function clickStudentLogin() {
  cy.contains('#studentLogin', 'Student Login').click();
  // new login page
};

export function clickStudentSignup() {
  cy.contains('a.header__action', 'Student Signup').click();
  // new signup page
};

export function forEmployers_Platform() {
  cy.contains('#menu-item-652', 'For Employers').click().within(() => {
    cy.contains('span','Platform').click();
  });
};

export function forEmployers_Solutions() {
  cy.contains('#menu-item-652', 'For Employers').click().within(() => {
    cy.contains('span','Solutions').click();
  });
};

export function forLearningProviders_LearningMarketplace() {
  cy.contains('#menu-item-1354', 'For Learning Providers').click().within(() => {
    cy.contains('span','Learning Marketplace').click();
  });
};

export function forLearningProviders_PartnerProgram() {
  cy.contains('#menu-item-1354', 'For Learning Providers').click().within(() => {
    cy.contains('span','Partner Program').click();
  });
};

export function resources_Blog() {
  cy.contains('#menu-item-2394', 'Resources').click().within(() => {
    cy.contains('span','Blog').click();
  });
  cy.wait(5000);
};

export function resources_ResourceCenter() {
  cy.contains('#menu-item-2394', 'Resources').click().within(() => {
    cy.contains('span','Resource Center').click();
  });
  cy.wait(5000);
};

export function resources_NewsPress() {
  cy.contains('#menu-item-2394', 'Resources').click().within(() => {
    cy.contains('span','News & Press').click();
    cy.wait(5000);
  });
};