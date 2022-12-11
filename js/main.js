class DomStep {
    constructor() {}
  
    newParaentAction(
      MainStepsID = '',
      MainContent = '',
      btnPrev = '',
      btnNext = ''
    ) {
      const MainNav = document.querySelectorAll(MainStepsID);
      const Main_Content = document.querySelectorAll(MainContent);
  
      const BtnPrev = document.getElementById(btnPrev);
      const BtnNext = document.getElementById(btnNext);
  
      let a = 0;
      let b = 0;
      let count = 1;
      const handleNext = () => {
        if (MainNav[a].children.length == Main_Content[a].children.length) {
          MainNav[a].children[count].classList.add('navActive');
  
          Main_Content[a].children[b].classList.remove('show_main-contetn');
          count++;
          b++;
          Main_Content[a].children[b].classList.add('show_main-contetn');
        }
      };
  
      const handlePrev = () => {
        if (
          count > 1 &&
          MainNav[a].children.length == Main_Content[a].children.length
        ) {
          MainNav[a].children[count - 1].classList.remove('navActive');
  
          Main_Content[a].children[b].classList.remove('show_main-contetn');
          count--;
          b--;
          Main_Content[a].children[b].classList.add('show_main-contetn');
        } else {
         return count
        }
        
      };
  
      BtnNext.addEventListener('click', handleNext);
      BtnPrev.addEventListener('click', handlePrev);
    }
  
    newChildAction(
      btnContainer = '',
      navbarContianer = '',
      contentContainer = ''
    ) {
      let a1 = 0;
      let b1 = 0;
      let count1 = 0;
  
      let contetn_btn = document.querySelectorAll(btnContainer);
      let Wizer_nav = document.querySelectorAll(navbarContianer);
      let Wizer_contetn = document.querySelectorAll(contentContainer);
  
      const handleNestedBtnNext = () => {
        if (
          a1 > -1 &&
          count1 < Wizer_nav[a1].children.length - 1 &&
          Wizer_nav[a1].children.length == Wizer_contetn[a1].children.length
        ) {
          Wizer_nav[a1].children[count1].classList.remove('isActives');
          Wizer_nav[a1].children[count1].classList.add('isDone');
          count1++;
          Wizer_nav[a1].children[count1].classList.add('isActives');
  
          Wizer_contetn[a1].children[b1].classList.remove('showContetn');
          b1++;
  
          Wizer_contetn[a1].children[b1].classList.add('showContetn');
        
        } else {
          // submit process coded here
          return count1;
        }
      };
  
      const handleNestedBtnPrev = () => {
        if (
          count1 > 0 &&
          Wizer_nav[a1].children.length == Wizer_contetn[a1].children.length
        ) {
          Wizer_nav[a1].children[count1].classList.remove('isActives');
          Wizer_nav[a1].children[count1 - 1].classList.remove('isDone');
  
          count1--;
          Wizer_nav[a1].children[count1].classList.add('isActives');
  
          Wizer_contetn[a1].children[b1].classList.remove('showContetn');
          b1--;
          Wizer_contetn[a1].children[b1].classList.add('showContetn');
        } else {
          
          return count1;
        }
        
      };
  
      contetn_btn[0].children[0].addEventListener('click', handleNestedBtnPrev);
      contetn_btn[0].children[1].addEventListener('click', handleNestedBtnNext);
    }
  }
  
  const newStep1 = new DomStep(
    '[nav-min-step-data]',
    '[content-step-main]',
    'PrevBtn',
    'NextBtn'
  );
  newStep1.newParaentAction(
    '[nav-min-step-data]',
    '[content-step-main]',
    'PrevBtn',
    'NextBtn'
  );
  newStep1.newChildAction(
    '[data-content-one-button="1"]',
    '[data-wizer-nav="1"]',
    '[data-nested-content="1"]'
  );
  newStep1.newChildAction(
    '[data-content-one-button="2"]',
    '[data-wizer-nav="2"]',
    '[data-nested-content="2"]'
  );
  newStep1.newChildAction(
    '[data-content-one-button="3"]',
    '[data-wizer-nav="3"]',
    '[data-nested-content="3"]'
  );
  newStep1.newChildAction(
    '[data-content-one-button="4"]',
    '[data-wizer-nav="4"]',
    '[data-nested-content="4"]'
  );
  