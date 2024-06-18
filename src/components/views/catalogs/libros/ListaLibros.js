import React, { Fragment, useEffect, useState } from "react"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

//imports para el PopUp de los mensajes
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddEditLibro from "./AddEditLibro";
import { BsAlignEnd, BsDisplay } from "react-icons/bs";

function CatLibros() {

//Hooks para el PopUp de los mensajes
const [show, setShow] = useState(false);
const [eliminar, setEliminar] = useState(false);
const handleClose = () => setShow(false);
const handleCloseEliminar = () => setEliminar(false);
const handleShow = () => setShow(true);
const handleShowDelete = () => setEliminar(true);
const [esNuevo, setEsNuevo] = useState(false);
const [id, setID] = useState(0);
const [idClasificacion, setidClasificacion] = useState(0);
const [clasificacion, setClasificacion] = useState();
const [idGenero, setidGenero] = useState(0);
const [genero, setGenero] = useState();
const [titulo, setTitulo] = useState();
const [trama, setTrama] = useState();
const [hojas, setHojas] = useState(0);


    {

  const datos = 
  [
      {
          id: 1,
          idClasificacion: 2,
          clasificacion: 'B',
          idGenero: 1,
          genero: 'Ficción',
          titulo: 'Harry Potter',
          trama: 'Un Mago que desde muy chico no se habia dado cuenta el gran poder que tenia ...',
          numeroHojas: 290
      },
      {
          id: 2,
          idClasificacion: 1,
          clasificacion: 'A',
          idGenero: 3,
          genero: 'Infantil',
          titulo: 'El Principito',
          trama: 'Este era un rey...',
          numeroHojas: 150
      }
  ]
  
      const [lista, setLista] = useState([])
      useEffect(()=>{
          setLista(datos);
      },[]
      )
  //eventos para la alta u baja de elementos
  const handleEdit = (idLibro, idClasificacion, clasificacion, idGenero, genero, titulo, trama, hojas)=>{
    setID(idLibro); setidClasificacion(idClasificacion); setClasificacion(clasificacion); setidGenero(idGenero); setGenero(genero); setTitulo(titulo); setTrama(trama); setHojas(hojas);
    setEsNuevo(false);
    handleShow();
   
  }

  const handleDelete = (id, titulo)=>{
    setID(id);
    setTitulo(titulo);
    handleShowDelete();
  }

  const handleNew = ()=>{
    setID(0); setidClasificacion(0); setClasificacion(""); setidGenero(0); setGenero(""); setTitulo(""); setTrama(""); setHojas(0);
    setEsNuevo(true);
    handleShow();
  }


  return (
    <><div>
      </div><Fragment>
              <Table striped bordered hover>
                  <thead>
                      <tr>

                          <th>Id</th>
                          <th>id</th>
                          <th>Clasificacion</th>
                          <th>id</th>
                          <th>Genero</th>
                          <th>Titulo</th>
                          <th>Trama</th>
                          <th># Hojas</th>
                          <th>
                             <button className="btn btn-success" onClick={() => handleNew()}>Agregar Libro</button>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {lista && lista.length > 0 ?
                          lista.map((item, index) => {
                              return (
                                  <tr key={index}>
                                      <td>{item.id}</td>
                                      <td>{item.idClasificacion}</td>
                                      <td>{item.clasificacion}</td>
                                      <td>{item.idGenero}</td>
                                      <td>{item.genero}</td>
                                      <td>{item.titulo}</td>
                                      <td>{item.trama}</td>
                                      <td>{item.numeroHojas}</td>
                                      <td colSpan={2}>
                                          <button className="btn btn-primary" onClick={() => handleEdit(item.id, item.idClasificacion, item.clasificacion, item.idGenero, item.genero, item.titulo, item.trama, item.numeroHojas)}>Editar</button>
                                          <button className="btn btn-danger" onClick={() => handleDelete(item.id, item.titulo)}>Eliminar</button>
                                      </td>

                                  </tr>
                              );
                          })
                          :
                          'espere un momento, cargando información...'}

                  </tbody>
              </Table>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>{!esNuevo ? "Modificar Libro" : "Nuevo Libro"}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <AddEditLibro esNuevo={esNuevo} id={id} idClasificacion={idClasificacion} clasificacion={clasificacion} idGenero={idGenero} genero={genero} titulo={titulo} trama={trama} hojas={hojas} />
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Cerrar
                      </Button>
                  </Modal.Footer>
              </Modal>
              {/* Modal para eliminar registro */}
            <Modal show={eliminar} onHide={handleCloseEliminar}>
                <Modal.Header closeButton>
                <Modal.Title>Alerta!</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Esta seguro de eliminar el Libro:  {titulo} ?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEliminar}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Eliminar
                </Button>
                </Modal.Footer>
            </Modal>
          </Fragment></>

);

}
}
export default CatLibros
