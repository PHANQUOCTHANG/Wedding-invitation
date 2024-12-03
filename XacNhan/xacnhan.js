const inputInformation = document.querySelector(".input-information");
const buttonFind = document.querySelectorAll(".find");
const textErrol = document.querySelector(".text-errol");
const textNotFind = document.querySelector(".text-notfind");
const buttonEnter = document.querySelector(".submit");
const boxTwo = document.querySelector(".box:nth-child(2)");
const boxThree = document.querySelector(".box:last-child"); 
const buttonBack = document.querySelector("#back");
const buttonConfirm = document.querySelector(".confirm");
const inputName = document.querySelector(".input-name");
const inputTelephone = document.querySelector(".input-telephone");
const selectCheckbox = document.querySelectorAll(".select-checkbox");
const textErrolConfirm = document.querySelector(".text-errol-confirm") ;

console.log(inputName) ;

buttonFind[0].addEventListener("click", () => {
  buttonFind[0].style.animation = "border-pulse-find 2s infinite" ;
  if (inputInformation.value === "") {
    textErrol.style.display = "block";
    setTimeout(()=>{
      inputInformation.focus() ;
    },100) ;
  } else {
    textErrol.style.display = "none";
    const value = inputInformation.value;
    let check = false ;
    // function find () ;
    if (!check) {
      textNotFind.style.display = "block";
      buttonEnter.style.display = "block" ;
    }
  }
  setTimeout(()=>{
    buttonFind[0].style.animation = "none" ; 
  },200) ;
});

buttonFind[1].addEventListener("click", () => {
  buttonFind[1].style.animation = "border-pulse-find 2s infinite" ;
  if (inputName.value === "" && inputTelephone.value === "") {
    textErrol.style.display = "block";
    setTimeout(()=>{
      inputName.focus() ;
    },100) ;
  } else {
    textErrol.style.display = "none";
  }
  setTimeout(()=>{
    buttonFind[1].style.animation = "none" ; 
  },200) ;
});

buttonEnter.addEventListener("click", () => {
  boxTwo.style.display = "none";
  boxThree.style.display = "block";
});

buttonBack.addEventListener("click", () => {
  boxTwo.style.display = "block";
  boxThree.style.display = "none";
});

buttonConfirm.addEventListener("click", () => {
  let check = false;
  let checkBox = false;
  if (inputName.value !== "" || inputTelephone.value !== "") check = true;
  for (let i = 0; i < selectCheckbox.size; i++) {
    if (selectCheckbox[i].value === true) {
      check = true;
      checkBox = true;
      break;
    }
  }
  if (!check || !checkBox) {
    textErrolConfirm.style.display = "block";
  }
});


