import React from 'react'
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function EditaLibro({id, esNuevo}) {
    /* const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */
  
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Clasificación</Form.Label>
          <Form.Select required placeholder="Clasificacion" aria-label="Default select example">
            <option></option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Campo Obligatorio.
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom11">
          <Form.Label>Genero</Form.Label>
          <Form.Select required placeholder="Genero" aria-label="Default select example">
            <option></option>
            <option value="1">Ficción</option>
            <option value="2">Adultos</option>
            <option value="3">Infantil</option>
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
            defaultValue=""
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
            defaultValue="0"
          />
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom12">
          <Form.Label>Trama</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Trama"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
          Campo Obligatorio.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Guardar</Button>
    </Form>
        
      </>

    );
}

export default EditaLibro
/* 
<Button variant="primary" onClick={handleShow}>
          {!esNuevo ? "Se modificara" : "Es Nuevo"}
          {id}
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modificar Libro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Do not even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
         */
