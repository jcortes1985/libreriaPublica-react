import React, { Fragment, useEffect, useState } from "react"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
//imports para el PopUp de los mensajes
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddEditLibro from "./AddEditLibro";


function CatLibros() {

//Hooks para el mantenimiento del catalogo de libros
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
    
      const [lista, setLista] = useState(null)
       useEffect(()=>{
        getData();
      },[]
      )

    //servicio para el llamado de lista de libros
    const getData =()=>{
        axios.get('http://localhost:5180/api/Libros').then((response)=> {
            setLista(response.data)
        }).catch((error)=>{
            console.log(error)
        })
        }
      //Servicio para el delete del Librop seleccionado
      const deleteData =(id)=>{
        axios.delete('http://localhost:5180/api/Libros/' + id).then((response)=> {
            setLista(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        }

//Eventos del Formulario
  //eventos para la alta o baja de elementos
    const handleEdit = (idLibro, idClasificacion, clasificacion, idGenero, genero, titulo, trama, hojas)=>{
    setEsNuevo(false);
    handleShow();
  }

  const handleDelete = (id, titulo)=>{
    setID(id);
    setTitulo(titulo);
    handleShowDelete();
  }
  
  const handleConfirmaDelete = ()=>{
    deleteData(id);
    handleCloseEliminar();
    getData();
  }

  const handleNew = ()=>{
    setEsNuevo(true);
    handleShow();
  }

const handleRegresar = () =>{
    handleClose();
    getData();
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
                                      <td>{item.idLibro}</td>
                                      <td>{item.idGenero}</td>
                                      <td>{item.idGenero}</td>
                                      <td>{item.idClasificacion}</td>
                                      <td>{item.idClasificacion}</td>
                                      <td>{item.titulo}</td>
                                      <td>{item.trama}</td>
                                      <td>{item.hojas}</td>
                                      <td colSpan={2}>
                                          <button className="btn btn-primary" onClick={() => handleEdit(setID(item.idLibro), setidClasificacion(item.idClasificacion), setidClasificacion(item.idClasificacion),setidGenero(item.idGenero), setidGenero(item.idGenero), setTitulo(item.titulo), setTrama(item.trama), setHojas(item.hojas))}>Editar</button>
                                          <button className="btn btn-danger" onClick={() => handleDelete(item.idLibro, item.titulo)}>Eliminar</button>
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
                      <Button variant="btn btn-success" onClick={handleRegresar}>
                          Regresar...
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
                <Button variant="primary" onClick={handleConfirmaDelete}>
                    Eliminar
                </Button>
                </Modal.Footer>
            </Modal>
          </Fragment></>
);
}
}

export default CatLibros
