
function uniqueEventMaker(){
  let eventData = apiGetEvent(getParam('eventId'));
  document.getElementById('eventName').innerHTML = eventData.nombre;
  document.getElementById('breadcrumbEventName').innerHTML = eventData.nombre;
  document.getElementById('eventAddress').innerHTML = eventData.direccion;
  document.getElementById('eventCity').innerHTML = eventData.ciudad;
  let date = new Date(eventData.fecha);
  document.getElementById('eventDate').innerHTML = date.toLocaleDateString();
  document.getElementById('eventDateHour').innerHTML = date.toLocaleTimeString();
  document.getElementById('eventTemp').innerHTML = eventData.clima.temp + "°C";
  document.getElementById('eventTempStatus').innerHTML = eventData.clima.estado;

  eventData.atuendosId.forEach( (item, index) => {
    let suggestionTemplate = `
    <tr role="row">
      <td>Atuendo ${index+1}</td>
      <td>
        <a class="btn btn-secondary" href="atuendo.html?suggestionId=${item}&suggestionIndex=${index+1}&eventName=${eventData.nombre}&eventId=${eventData.id}">
          <span class="text">Ver</span>
        </a>
      </td>
    </tr>
    `;
    document.getElementById('suggestionsList').insertAdjacentHTML('beforeend', suggestionTemplate);
  })
}

function eventMaker(){
  let eventsData = apiGetEvents();
  eventsData.forEach( item => {
    let template =
    `
    <!-- Fila evento-->
    <tr role="row">
      <td>${item.nombre}</td>
      <td>${item.tipo}</td>
      <td>${new Date(item.fecha).toLocaleDateString()}</td>
      <td>
        <a class="btn btn-primary" href="informacionEvento.html?eventId=${item.id}">
          <span class="text">Información</span>
        </a>
        <button class="btn btn-danger" data-toggle="modal" data-target="#modalEliminarEvento${item.id}">
          <span class="text">Eliminar</span>
        </button>
      </td>
    </tr>
    <!-- Modal -->
    <div class="modal animated--grow-in" id="modalEliminarEvento${item.id}" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5>¿Eliminar evento?</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" onclick="apiDeleteEvent(${item.id})">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
    `;
    document.getElementById('eventsList').insertAdjacentHTML('beforeend',template);
  });
}

function suggestionMaker(){
  document.getElementById('breadcrumbSuggestionEvent').innerHTML = getParam('eventName');
  document.getElementById('breadcrumbSuggestionEvent').setAttribute('href','informacionEvento.html?eventId='+getParam('eventId'));
  document.getElementById('breadcrumbSuggestion').innerHTML = 'Sugerencia '+getParam('suggestionIndex');
}
