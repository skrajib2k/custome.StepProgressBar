class DomStep {
  constructor() {
    this.state=1
    this.navState=0
    this.contentState=0

this.MainNavDom=''
this.Main_ContentDom=''

  }

  newParaentAction(
    MainStepsID = '',
    MainContent = '',
    btnPrev = '',
    btnNext = ''
  ) {
    const MainNav = document.querySelectorAll(MainStepsID);
    const Main_Content = document.querySelectorAll(MainContent);

    this.MainNavDom=MainNav
    this.Main_ContentDom=Main_Content

    const BtnPrev = document.getElementById(btnPrev);
    const BtnNext = document.getElementById(btnNext);

    const handleNext = () => {
      if (this.state<MainNav[this.navState].children.length&&MainNav[this.navState].children.length == Main_Content[this.navState].children.length) {
        MainNav[this.navState].children[this.state].classList.add('navActive');

        Main_Content[this.navState].children[this.contentState].classList.remove('show_main-contetn');
        this.state++;
        this.contentState++;
        Main_Content[this.navState].children[this.contentState].classList.add('show_main-contetn');

      }else{
        return this.state
      }
   };

    const handlePrev = () => {
      if (
        this.state > 1 &&
        MainNav[this.navState].children.length == Main_Content[this.navState].children.length
      ) {
        MainNav[this.navState].children[this.state - 1].classList.remove('navActive');

        Main_Content[this.navState].children[this.contentState].classList.remove('show_main-contetn');
        this.state--;
        this.contentState--;
        Main_Content[this.navState].children[this.contentState].classList.add('show_main-contetn');
      } else {
       return this.state
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
        if (this.state<this.MainNavDom[this.navState].children.length&&this.MainNavDom[this.navState].children.length == this.Main_ContentDom[this.navState].children.length) {
          this.MainNavDom[this.navState].children[this.state].classList.add('navActive');
  
          this.Main_ContentDom[this.navState].children[this.contentState].classList.remove('show_main-contetn');
          this.state++;
          this.contentState++;
          this.Main_ContentDom[this.navState].children[this.contentState].classList.add('show_main-contetn');
        }else{
          return this.state
        }
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
        if (
          this.state > 1 &&
          this.MainNavDom[this.navState].children.length == this.Main_ContentDom[this.navState].children.length
        ) {
          this.MainNavDom[this.navState].children[this.state - 1].classList.remove('navActive');
  
          this.Main_ContentDom[this.navState].children[this.contentState].classList.remove('show_main-contetn');
          this.state--;
          this.contentState--;
          this.Main_ContentDom[this.navState].children[this.contentState].classList.add('show_main-contetn');
        return this.state;
      }   
    };
  }
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
