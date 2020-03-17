// Create variables for the welcome message
var greeting, name, message, sign, welcome, tiles, subTotal, shipping, grandTotal;
// Concatenate the three variables above to create the welcome message
console.log(greeting,name,message,sign);

function initialVars() 
{ 
  window.greeting = 'Howdy ';
  window.name = 'Molly';
  window.message = ', please check your order:';
  window.sign ='Montague House';
  
  window.welcome = greeting + name + message;
  
  console.log('Variables Initialized')
}

function doMath() {
  window.tiles = sign.length;
  window.subTotal = tiles * 5;
  window.shipping = 7;
  window.grandTotal = subTotal + shipping;
}
// Create variables to hold details about the sign

function setTextContentById(getId, setText) 
{
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setText;
  console.log("setText Worked");
}

function setValueContentById(getId, setText) 
{
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = "$"+setText;
  console.log("setValue Worked");
}

initialVars();

doMath();


document.getElementById("btn").addEventListener("click",function(event){
  event.preventDefault();
  
  window.greeting = '';
  window.name = '';
  window.message = '';
  window.sign ='';
  
  window.welcome = greeting + name + message;
  
  doMath();
  
    (function(){
  
      setTextContentById("greeting", welcome);

      setTextContentById("userSign", sign);

      setTextContentById("tiles", tiles);

      setValueContentById("subTotal", subTotal);

      setValueContentById("shipping", shipping);

      setValueContentById("grandTotal", grandTotal);
  
  })();
  
  console.log('Variables Re-initialized') 
  
});

(function(){
  
  setTextContentById("greeting", welcome);

  setTextContentById("userSign", sign);

  setTextContentById("tiles", tiles);

  setValueContentById("subTotal", subTotal);

  setValueContentById("shipping", shipping);

  setValueContentById("grandTotal", grandTotal);
  
})();