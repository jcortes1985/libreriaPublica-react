import React, { Fragment, useEffect, useState } from "react"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

//imports para el PopUp de los mensajes
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddEditLibro from "./AddEditLibro";

function CatLibros() {

//Hooks para el PopUp de los mensajes
const [show, setShow] = useState(false);
const [add, setAdd] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [id, setID] = useState(0)
const [esNuevo, setEsNuevo] = useState(false)

  const datos = 
  [
      {
          id: 1,
          clasificacion: 'B',
          genero: 'Ficción',
          titulo: 'Harry Potter',
          trama: 'Un Mago que desde muy chico no se habia dado cuenta el gran poder que tenia ...',
          numeroHojas: 290
      },
      {
          id: 2,
          clasificacion: 'A',
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
  const handleEdit = (id1)=>{
    setID(id1);
    setEsNuevo(false);
    //alert(id + 1);
    handleShow();
   
  }

  const handleDelete = (id)=>{
    alert(id);
  }

  const handleUpdate = (id)=>{
    handleShow();
  }


  return (
    <Fragment>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Clasificacion</th>
                    <th>Genero</th>
                    <th>Titulo</th>
                    <th>Trama</th>
                    <th># Hojas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista && lista.length > 0 ?
                        lista.map((item, index)=>{
                            return(
                                <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.clasificacion}</td>
                                <td>{item.genero}</td>
                                <td>{item.titulo}</td>
                                <td>{item.trama}</td>
                                <td>{item.numeroHojas}</td>
                                <td colSpan={2}>
                                    <button className="btn btn-primary" onClick={()=>handleEdit(item.id)}>Editar</button>
                                    <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Eliminar</button>
                                </td>

                                </tr>
                            )
                        })
                        :
                        'espere un momento, cargando información...'
                    }
                   
                </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{!esNuevo ? "Modificar Libro" : "Nuevo Libro"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddEditLibro id={id} esNuevo={esNuevo} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                   {/*  <Button variant="primary" onClick={handleUpdate}>
                        Guardar Cambios
                    </Button> */}
                    </Modal.Footer>
                </Modal>
            </Fragment>

);

}
export default CatLibros
