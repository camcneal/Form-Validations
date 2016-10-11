

var el = document.querySelector('.produce');

var finsihedform = {};

el.addEventListener('click', function() {

//find value of first name
// console.dir(document.querySelector('#t1').value);

//test value too see if anythings there
if ('' === document.querySelector('#t1').value){
  alert('tryagain');
} else {
  finsihedform.firstName = document.querySelector('#t1').value;
  // console.log(finsihedform);
}
//if there is a value log if it not tell user try again
// console.dir(document.querySelector('#t2').value);
// if ('' === document.querySelector('#t2').value){
if ('' === document.querySelector('#t2').value){
  alert('tryagain');
} else {
  finsihedform.lastName = document.querySelector('#t1').value;
}
//   console.log(tryagain);
// }
// console.dir(document.querySelector('#t3').value);
if ('' === document.querySelector('#t3').value){
  alert('tryagain');
} else {
  finsihedform.emailAddress = document.querySelector('#t3').value;
}
console.dir(document.querySelector('#l1').value);
if ('' === document.querySelector('#l1').value){
  alert('tryagain');
} else {
  console.log(document.querySelector('#l1').value);
  finsihedform.country = document.querySelector('#l1').value;
  // console.log(finsihedform);


}

console.dir(document.querySelector('#t5').value);
if ('' === document.querySelector('#t5').value){
  alert('tryagain');
} else {
  finsihedform.biography = document.querySelector('#t5').value;
}

console.dir(document.querySelector('#t6').value);
if ('' === document.querySelector('#t6').value){
  alert('tryagain');
} else {
  finsihedform.phoneNumber = document.querySelector('#t6').value;
}

console.dir(document.querySelector('#t7').value);
if ('' === document.querySelector('#t7').value){
  alert('tryagain');
} else {
  finsihedform.affilations = document.querySelector('#t7').value;
}

console.dir(document.querySelector('#t8').value);
if ('' === document.querySelector('#t8').value){
  alert('tryagain');
} else {
  finsihedform.occupation = document.querySelector('#t8').value;
}

console.dir(document.querySelector('#t9').value);
if ('' === document.querySelector('#t9').value){
  alert('tryagain');
} else {
  finsihedform.catsName = document.querySelector('#t9').value;
}

console.dir(document.querySelector('#t10').value);
if ('' === document.querySelector('#t10').value){
  alert('tryagain');
} else {
  finsihedform.favoriteGadget = document.querySelector('#t10').value;
}

console.dir(document.querySelector('#t11').value);
if ('' === document.querySelector('#t11').value){
  alert('tryagain');
} else {
  finsihedform.typeOfTalent = document.querySelector('#t11').value;
}

console.dir(document.querySelector('#t12').value);
if ('' === document.querySelector('#t12').value){
  alert('tryagain');
} else {
  finsihedform.favoriteDrink = document.querySelector('#t12').value;
}

console.dir(document.querySelector('#t13').value);
if ('' === document.querySelector('#t13').value){
  alert('tryagain');
} else {
  finsihedform.specialPower = document.querySelector('#t13').value;
}

console.dir(document.querySelector('#t14').value);
if ('' === document.querySelector('#t14').value){
  alert('tryagain');
} else {
  finsihedform.weaponOfChoice = document.querySelector('#t14').value;
}

console.dir(document.querySelector('#t15').value);
if ('' === document.querySelector('#t15').value){
  alert('tryagain');
} else {
  finsihedform.comments = document.querySelector('#t15').value;
}

console.log(finsihedform);

})
