// HELPER PARA OBTENER PARAMETROS POR URL
let params = location.search.substring(1).split('&').map(i => {
  let temp = i.split('=');
  return {
    key: temp[0],
    value: temp[1]
  };
});
function getParam(paramName){
  return params.find(i => i.key==paramName).value;
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
