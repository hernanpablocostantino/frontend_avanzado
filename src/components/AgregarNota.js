import React from 'react'
function AgregarNota() {
  return (
    <section className="col-sm-4 offset-md-4">
      <div className="card card-body my-5">
        <h2>Crear una nueva nota</h2>
          <div className="form-group mt-2">
            <input type="text" className="form-control" placeholder="Nombre" name="nombre"></input>
          </div>
          <div className="form-group mt-2">
            <input type="text" className="form-control" placeholder="Titulo" name="titulo"></input>
          </div>
          <div className="form-group mt-2">
            <textarea name="content" className="form-control" placeholder="Contenido"></textarea>
          </div>
          <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary mt-4">Guardar</button>
          </div>
        </div>
    </section>
  )
}

export default AgregarNota;