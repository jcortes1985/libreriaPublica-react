import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


function EditaLibro({esNuevo, id, idClasificacion, clasificacion, idGenero, genero, titulo, trama, hojas}) {
  
   
    //Hooks para el llenado del nuevo o el actualizadao del registro
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const[valTitulo, setvalTitulo] = useState(titulo);
    const[valTrama, setvalTrama] = useState(trama);
    const[valIdClasificacion, setvalIdClasificacion] = useState(idClasificacion);
    const[valIdGenero, setvalIdGenero] = useState(idGenero);
    const[valHojas, setvalHojas] = useState(hojas);
    const [clasificaciones, setclasificaciones] = useState(null)
    const [generos, setgeneros] = useState(null)


    useEffect(()=>{
      
      getDataclasificaciones();
      getDataGeneros();
    },[]
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form.checkValidity());
        console.log(Form.Contro)
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else
        {
          handleGuardaDatos();

        }
    setValidated(true);
  };

  const handleGuardaDatos = ()=>{
    insertData();
  }

  const handleRegresar = () =>{
      handleClose();
  }

      //Servicio para guardar del Librop seleccionado
      const insertData =()=>{
          const url = 'http://localhost:5180/api/Libros';
          const body = {
              "idClasificacion": valIdClasificacion,
              "idGenero": valIdGenero,
              "titulo": valTitulo,
              "trama": valTrama,
              "hojas": valHojas,
              "numLibros": 100,
              "soloUsers": 0
          }
          axios.post(url, body)
          handleShow()
    }

    //servicio para el llenado del Catalogo de Clasificaciones
  const getDataclasificaciones =()=>{
    axios.get('http://localhost:5180/api/Catalogos/GetCatClasificaciones').then((response)=> {
      setclasificaciones(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
  }

  //servicio para el llenado del Catalogo de Generos
  const getDataGeneros =()=>{
      axios.get('http://localhost:5180/api/Catalogos/GetCatGeneros').then((response)=> {
        setgeneros(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
  }

    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Clasificación</Form.Label>
          <Form.Select required placeholder="Clasificacion" aria-label="Default select example" defaultValue={valIdClasificacion} 
          onChange={e => setvalIdClasificacion(e.target.value)}>
            <option></option>
            {clasificaciones && clasificaciones.length > 0 ?
            clasificaciones.map((item, index) => {  
              return (     
                  <option value={item.idClasificacion}>
                    {item.name}
            </option>
              );
          })
          :
          <option value="1">No se encontro info para este catálogo...</option>
          }
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Campo Obligatorio.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="8" controlId="validationCustom11">
          <Form.Label>Genero</Form.Label>
          <Form.Select required placeholder="Genero" aria-label="Default select example" defaultValue={valIdGenero} 
          onChange={e => setvalIdGenero(e.target.value)}
          > 
            <option></option>
            {generos && generos.length > 0 ?
            generos.map((item, index) => {  
              return (     
                  <option value={item.idGenero}>
                    {item.name}
            </option>
              );
          })
          :
          <option value="1">No se encontro info para este catálogo...</option>
          }
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Campo Obligatorio.
          </Form.Control.Feedback>
          </Form.Group>
        <Form.Group as={Col} md="9" controlId="validationCustom02">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Titulo"
            defaultValue={valTitulo}
            onChange={e => setvalTitulo(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
          Campo Obligatorio.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label># de Hojas</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hojas"
            defaultValue={valHojas}
            onChange={e => setvalHojas(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom12">
          <Form.Label>Trama</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Trama"
            defaultValue={valTrama}
            onChange={e => setvalTrama(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
          Campo Obligatorio.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Guardar</Button>
       {/* Modal para eliminar registro */}
       <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Nuevo Libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>El libro fue registrado con éxito.</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleRegresar}>
                    Aceptar
                </Button>
                </Modal.Footer>
        </Modal>
    </Form>
      </>
    );
}

export default EditaLibro
