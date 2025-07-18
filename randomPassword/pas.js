
function generatingPassword(length,
   includeUppercase,includeLowercase,
   includeNumbers,includeSymbols){

const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars ="0123456789";
const symbolChar ="!@#$%^&*()?><";

let allowedChars="";
let password="";

allowedChars +=includeLowercase ? lowercaseChars:"";

allowedChars += includeUppercase ? uppercaseChars:"";

allowedChars += includeNumbers ? numberChars:"";

allowedChars += includeSymbols ? symbolChar :"";


if(length<=0){
   return `(Password length must e at least 1)`;
}
if(allowedChars.length===0){
   return`(at least 1 set of char needs to be select)`;
}

for(i=0; i<length;i++){
   const randomIndex=Math.floor(Math.random()*allowedChars.length);
   password +=allowedChars[randomIndex];
}

   return password;
}






function handleGen(){

const passwordLength=13;
const includeUppercase=true;
const includeLowercase=false;
const includeNumbers=true;
const includeSymbols=true;


const password=generatingPassword(passwordLength,
   includeUppercase,
   includeLowercase,
   includeNumbers,
   includeSymbols);

   document.getElementById("num").value =password;

}