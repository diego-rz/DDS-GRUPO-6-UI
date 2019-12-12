 let eventsList = [
  {
    id: 1,
    nombre: "Cumpleaños",
    tipo: "Único",
    ciudad: "Buenos Aires",
    direccion: "Calle falsa 123",
    fecha: 1572821995000,
    clima: {
      temp: 22,
      estado: "Soleado"
    } ,
    atuendoId: 23,
    atuendosId: [
      45, 23, 66
    ]
  },
  {
    id: 2,
    nombre: "Casamiento",
    tipo: "Único",
    ciudad: "Springfield",
    direccion: "Evergreen 742",
    fecha: 1572825721000,
    clima: {
      temp: 10,
      estado: "Lluvioso"
    } ,
    atuendoId: 23,
    atuendosId: [
      45, 23, 66
    ]
  },
  {
    id: 3,
    nombre: "Partido",
    tipo: "Único",
    ciudad: "Buenos Aires",
    direccion: "Calle 4 234",
    fecha: 1572827395000,
    clima: {
      temp: 10,
      estado: "Soleado"
    } ,
    atuendoId: 23,
    atuendosId: [
      45, 23, 66
    ]
  }
];

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

function apiGetGuardarropas(token) {
  return httpRequest('GET', "guardarropas", token, null, null);
}

function apiGetEvent(id) {
  return eventsList.find( i => i.id == id);
}

function apiGetEvents() {
  return eventsList;
}

function apiDeleteEvent(eventId) {
  location.reload();
  console.log('Se elimina el evento ' + eventId);
}
