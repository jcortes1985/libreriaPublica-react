import React, { Fragment, useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Alert } from "bootstrap";

function TransaccionLibros() {
    const [validated, setValidated] = useState(false);
    const [valIdLibro, setvalIdLibro] = useState('');
    const [valIdPersona, setvalIdPersona] = useState('');
    const [valFechaRegreso, setvalFechaRegreso] = useState('');
    const [catLibro, setCatLibro] = useState(null)
    const [catPersonas, setPersonas] = useState(null)
    const [catListaTransacciones, setcatListaTransacciones] = useState(null)
    
       useEffect(()=>{
        getDataLibros();
        getDataPersonas();
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

    //evento para devolver todos los libros por persona
    const handleDevolverTodos = ()=>{
    }

    //evento para devolver libro
    const handlDevolverLibro = ()=>{
    }

    //evento para el guardado del libro en prestamo
    const handleGuardaDatos = ()=>{
      //e.preventDefault();
      insertData();
      
    }

      //Servicio para guardar del Libro en prestamo
      const insertData =()=>{

              const url = 'http://localhost:5180/api/Transacciones/' + valIdPersona
              const body = {
                  "idUser": 0,
                  "idPersona": valIdPersona,
                  "idLibro": valIdLibro,
                  "fechaTransaccion": '0',
                  "fechaRegreso": valFechaRegreso
              }
              const response = axios.post(url, body)
        }

    //servicio para el llenado del Catalogo de libros
    const getDataLibros =()=>{
      axios.get('http://localhost:5180/api/Catalogos/GetCatLibros')
      .then((response)=> {
          setCatLibro(response.data)
          console.log(response)
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  //servicio para el llenado del Catalogo de Personas
  const getDataPersonas =()=>{
    axios.get('http://localhost:5180/api/Catalogos/GetCatPersonas')
    .then((response)=> {
      setPersonas(response.data)
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  //Servicio para el listado de las transacciones
  const getListadoTransacciones =()=>{
    axios.get('http://localhost:5180/api/Transacciones/' + valIdPersona)
    .then((response)=> {
        console.log(response)
        setcatListaTransacciones(response.data)

    })
    .catch((error)=>{
        console.log(error)
    })

}

  return (
    <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <div>
            <h3>Ingrese los datos para la solicitud de libros</h3>
        </div>
          <Form.Group as={Col} md="6" controlId="validationCustom11">
          <Form.Label>Solicitante</Form.Label>
          <Form.Select required placeholder="Solicitante" aria-label="Default select example" defaultValue={0} id="idListaPersona" 
          onChange={e => setvalIdPersona(e.target.value)} onClick={getListadoTransacciones}   
          > 
            <option></option>
            {catPersonas && catPersonas.length > 0 ?
            catPersonas.map((item, index) => {  
              return (     
                  <option value={item.idPersona}>
                    {item.nombre} {item.aPaterno} {item.aMaterno}
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
          <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nombre del Libro </Form.Label>
          <Form.Select required placeholder="NombreLibro" aria-label="Default select example" defaultValue={valIdLibro} 
          onChange={e => setvalIdLibro(e.target.value)}>
           <option></option>
           {catLibro && catLibro.length > 0 ?
            catLibro.map((item, index) => {  
              return (     
                  <option value={item.idLibro}>
                    {item.titulo}
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

        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Fecha de Regreso</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Fecha de Regreso"
            defaultValue={'01/01/1985'}
            onChange={e => setvalFechaRegreso(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
          Campo Obligatorio.
            </Form.Control.Feedback>

        </Form.Group>
        <div>
        <Form.Group as={Col} md="7" controlId="validationCustom20">
        <Button type="submit">Prestar Libro </Button>

        </Form.Group>
        </div>
      </Row>
    </Form>
    <div>
      <div>
        <h1> </h1>
      </div>
    <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th>IdTransaccion</th>
                          <th>Persona</th>
                          <th>Libro</th>
                          <th>Fecha Prestamo</th>
                          <th>Fecha Regreso</th>
                          <th>
                             <button className="btn btn-success" onClick={() => handleDevolverTodos()}>Devolver todos...</button>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {catListaTransacciones && catListaTransacciones.length > 0 ?
                          catListaTransacciones.map((item, index) => {
                              return (
                                  <tr key={index}>
                                      <td>{item.idTransaccion}</td>
                                      <td>{item.idPersona}</td>
                                      <td>{item.idLibro}</td>
                                      <td>{item.fechaTransaccion}</td>
                                      <td>{item.fechaRegreso}</td>
                                      <td colSpan={1}>
                                          <button className="btn btn-primary" onClick={() => handlDevolverLibro(item.idPersona, item.idLibro)}>Devolver Libro</button>
                                      </td>

                                  </tr>
                              );
                          })
                          :
                          'No existen libros pendientes por entregar...'}
                  </tbody>
              </Table>
    </div>
      </>
  )
}

export default TransaccionLibros
