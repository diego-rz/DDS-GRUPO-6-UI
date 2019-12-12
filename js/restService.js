const host = 'https://dds-2019-db.herokuapp.com/';
// const host = 'http://localhost:5000/';

function joinQueryParams(params) {
  return params
  .map(element => element.key + "=" + element.value)
  .join('&');
}

function httpRequest(method, path, token, queryParams, requestBody) {
  let params = '';
  if(queryParams && queryParams.length > 0){
    params = joinQueryParams(queryParams); 
  }
  let xhttp = new XMLHttpRequest();
  xhttp.open(method, host + path + params, false);
  if(requestBody){
    xhttp.setRequestHeader('Content-type', 'application/json');
  }
  xhttp.setRequestHeader('Authorization', token);
  xhttp.send(JSON.stringify(requestBody));
 return JSON.parse(xhttp.responseText);
 
}

function apiLogin(username, password) {
  let requestBody = {
    username: username,
    password: password
  };
  let response = httpRequest('POST', "login", null, null, requestBody);
  if(response.error){
    window.location.href = 'login.html';
  } else if(response.token) {
    window.location.href = 'index.html?token='+response.token;
  }
}

// GUARDARROPAS
function apiGetGuardarropas(token) {
  return httpRequest('GET', "guardarropas", token, null, null);
}
function apiAddGuardarropa(token, guardarropa) {
  httpRequest('POST', "guardarropas", token, null, guardarropa);
}
function apiDeleteGuardarropa(token, guardarropaId) {
  httpRequest('DELETE', "guardarropas/"+guardarropaId, token, null, null);
  location.reload();
}

// EVENTOS
function apiGetEvents(token) {
  return httpRequest('GET', "eventos", token, null, null);
}
function apiAddEvent(token, event) {
  return httpRequest('POST', "eventos", token, null, event);
}
function apiGetEvent(token, eventId) {
  return httpRequest('GET', "eventos/"+eventId, token, null, null);
}
function apiModEvent(token, eventFull) {
  return httpRequest('PUT', "eventos/"+eventFull.id, token, null, eventFull);
}
function apiDeleteEvent(token, eventId) {
  httpRequest('DELETE', "eventos/"+eventId, token, null, null);
  location.reload();
}
function apiSetAtuendo(token, eventId, atuendo) {
  return httpRequest('POST', "eventos/"+eventId+"/atuendos", token, null, atuendo);
}

//PRENDAS
function apiGetPrendas(token) {
  return httpRequest('GET', "prendas", token, null, null);
}
function apiAddPrenda(token, prenda) {
  return httpRequest('POST', "prendas", token, null, prenda);
}
function apiModPrenda(token, prenda) {
  return httpRequest('PUT', "prendas/"+prenda.id, token, null, prenda);
}
function apiDeletePrenda(token, prendaId) {
  httpRequest('DELETE', "prendas/"+prendaId, token, null, null);
  location.reload();
}

