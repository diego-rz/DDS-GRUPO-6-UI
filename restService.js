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

function apiGetEvent(id) {

  return eventsList.find( i => i.id == id);

}

function apiGetEvents(){
  return eventsList;
}

function apiDeleteEvent(eventId) {
  location.reload();
  console.log('Se elimina el evento ' + eventId);
}
