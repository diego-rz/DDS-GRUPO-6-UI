// HELPER PARA OBTENER PARAMETROS POR URL
let params = location.search.substring(1).split('&').map(i => {
  let temp = i.split('=');
  return {
    key: temp[0],
    value: temp[1]
  };
});
function getParam(paramName){
  let param = params.find(i => i.key==paramName);
  if (param) {
    return param.value;
  }
  return null;
}

function getImage() {
  let xhttp = new XMLHttpRequest();

  // EJEMPLO REQUEST HTTP CON AJAX
  xhttp.open('GET', 'https://random.dog/woof.json', true);
  xhttp.send();
  xhttp.onreadystatechange =  () => {
    let responseObject = JSON.parse(xhttp.responseText);
    document.getElementById("imagen-perro").setAttribute("src", responseObject.url);
  };
}

function toggleNavbar() {
  console.log("toggle navbar");
  $('#sidebar-menu').toggleClass('d-none');
  $('#sidebar-menu').toggleClass('d-block');
}

var replaceLinks = function() {
  let elements = document.getElementsByTagName("a");
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].href !== window.location.href){
      elements[i].href = elements[i].href+"?token="+getParam('token')
    }
  }
};

window.onload = replaceLinks;

let token = getParam('token');
let username = getParam('username');
let password = getParam('password');
if(username && password) {
  console.log("username");
  apiLogin(username, password);
} else if (!token) {
  console.log("sin token");
  window.location.href = "login.html"
} else {
  console.log("document");
}
