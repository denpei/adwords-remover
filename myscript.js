setTimeout(myFunc, 1000);

function myFunc() {
  console.log("fuck adwords");
  var mainContainer = document.getElementById("center_col");
  var adsContainer = document.getElementById("taw");
  mainContainer.removeChild(adsContainer);

  var myDiv = document.createElement('div');
  myDiv.id = 'dkpblock';
  myDiv.className = 'dkpblock';

  //mainContainer.appendChild(myDiv);
  mainContainer.insertBefore(myDiv, mainContainer.childNodes[0])
  myDiv.innerHTML = '<h2>FUCK ADWORDS!!</h2>';

  setTimeout(myFunc2, 2000);
}

function myFunc2() {
  var mainContainer = document.getElementById("center_col");
  var adsContainer = document.getElementById("dkpblock");
  mainContainer.removeChild(adsContainer);
}
