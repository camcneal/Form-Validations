

var el = document.querySelector('.produce');

var finsihedform = {};

el.addEventListener('click', function() {

//find value of first name
// console.dir(document.querySelector('#t1').value);

//test value too see if anythings there
if ('' === document.querySelector('#t1').value){
  alert('Must enter First Name');
// } else {
//   finsihedform.firstName = document.querySelector('#t1').value;
  console.log(finsihedform.firstName);
// }
//if there is a value log if it not tell user try again
// console.dir(document.querySelector('#t2').value);
// if ('' === document.querySelector('#t2').value){
} else if ('' === document.querySelector('#t2').value){
  alert('Must enter Last Name');
// } else {
//   finsihedform.lastName = document.querySelector('#t2').value;
// }
//   console.log(tryagain);
// }
// console.dir(document.querySelector('#t3').value);
} else if ('' === document.querySelector('#t3').value){
  alert('Must enter Email Address');
// } else {
//   finsihedform.emailAddress = document.querySelector('#t3').value;
// }
} else if ('' === document.querySelector('#l1').value){
  alert('Must Select Country');
// } else {
//   finsihedform.country = document.querySelector('#l1').value;
// }

} else if ('' === document.querySelector('#t5').value){
  alert('Must Fill Bio');
// } else {
//   finsihedform.biography = document.querySelector('#t5').value;
// }

} else if ('' === document.querySelector('#t6').value){
  alert('Must enter Phone Number');
// } else {
//   finsihedform.phoneNumber = document.querySelector('#t6').value;
// }

} else if ('' === document.querySelector('#t7').value){
  alert('Must enter Affilations');
// } else {
//   finsihedform.affilations = document.querySelector('#t7').value;
// }

} else if ('' === document.querySelector('#l2').value){
  alert('Must choose an Occupation');
// } else {
//   finsihedform.occupation = document.querySelector('#t8').value;
// }

} else if ('' === document.querySelector('#t9').value){
  alert('Must enter Cats Name');
// } else {
//   finsihedform.catsName = document.querySelector('#t9').value;
// }

} else if ('' === document.querySelector('#t10').value){
  alert('Must enter Gadget');
// } else {
//   finsihedform.favoriteGadget = document.querySelector('#t10').value;
// }

} else if ('' === document.querySelector('#l3').value){
  alert('Must choose a talent');
// } else {
//   finsihedform.typeOfTalent = document.querySelector('#t11').value;
// }

} else if ('' === document.querySelector('#t12').value){
  alert('Must enter a Drink');
// } else {
//   finsihedform.favoriteDrink = document.querySelector('#t12').value;
// }

} else if ('' === document.querySelector('#t13').value){
  alert('Must Enter a Power');
// } else {
//   finsihedform.specialPower = document.querySelector('#t13').value;
// }

} else if ('' === document.querySelector('#t14').value){
  alert('Must Enter a Weapon');
// } else {
//   finsihedform.weaponOfChoice = document.querySelector('#t14').value;
// }

} else if ('' === document.querySelector('#t15').value){
  alert('Must Enter Comment');
} else {
  finsihedform.comments = document.querySelector('#t1', 't#2','#t3','#t4','#t5','#t6','#t7','#t8','#t9','#t10','#t11','#t12','#t13','#t14','#t15').value;
  alert ( "ok, the whole form was good, so now lets get all the data from the form and make it into an object")
}


})
