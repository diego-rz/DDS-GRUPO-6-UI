function prendasMaker(){
  replaceLinks();
  let prendas = apiGetPrendas(getParam('token'));
  if(!prendas){
    return;
  }
  prendas.forEach( item => {
    let template = 
    `
    <tr role="row">
      <td><img src="${item.imagenPrenda}" class="avatar" alt="Avatar Image"></td>
      <td>${item.categoria.nombre}</td>
      <td>
        <form id="1">
          <p class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5">
            <label for="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4">
            <label for="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3">
            <label for="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2">
            <label for="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1">
            <label for="radio5">★</label>
          </p>
        </form>
        <button class="btn btn-danger" data-toggle="modal" data-target="#modalEliminarPrenda${item.id}">
          <span class="text">Eliminar</span>
        </button>
        <div class="modal animated--grow-in" id="modalEliminarPrenda${item.id}" tabindex="-1" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <h5>¿Eliminar prenda?</h5>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger" onclick="apiDeletePrenda(${getParam('token')},${item.id})">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    `
    document.getElementById('prendasList').insertAdjacentHTML('beforeend',template);
  });
}