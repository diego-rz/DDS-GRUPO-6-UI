function guardarropasMaker() {
  replaceLinks();
  let guardarropas = apiGetGuardarropas(getParam('token'));
  guardarropas.forEach( item => {
    let template =
    `
    <tr role="row">
      <td>${item.nombre}</td>
      <td class="d-none d-sm-table-cell">${item.propietario.nombre} ${item.propietario.apellido}</td>
      <td>
        <button class="btn btn-primary">
          <span class="text">Información</span>
        </button>
        <a href="prenda.html" class="text"><button class="btn btn-primary">
          <span class="text" >Prendas</span>
        </button></a>
        <button class="btn btn-danger" data-toggle="modal" data-target="#modalEliminarGuardarropa${item.id}">
          <span class="text">Eliminar</span>
        </button>
      </td>
    </tr>
    <!-- Modal -->
    <div class="modal animated--grow-in" id="modalEliminarGuardarropa${item.id}" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5>¿Eliminar guardarropa?</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger" onclick="apiDeleteGuardarropa(${getParam('token')},${item.id})">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
    `;
    document.getElementById('guardarropasList').insertAdjacentHTML('beforeend',template);
  })
}

function newGuardarropaMaker() {
  replaceLinks();
  let tokenInput = document.getElementById("tokenInput");
  if(tokenInput){
    tokenInput.setAttribute('value', getParam('token'));
  }
}

let nuevo = getParam('nuevoNombre');
if(nuevo){
  apiAddGuardarropa(getParam('token'), nuevo);
}