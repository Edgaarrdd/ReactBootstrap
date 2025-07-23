import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contáctanos</h2>

      {/* Fila para el Formulario */}
      <Row className="justify-content-center">
        {" "}
        {/* Centra el contenido en la fila */}
        <Col md={10} lg={8} className="mb-4">
          {" "}
          {/* Ocupa 8 columnas en md, 6 en lg, y se centra */}
          <Form>
            <Form.Group controlId="nombre" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre completo" />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </Form.Group>

            <Form.Group controlId="mensaje" className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Escribe tu consulta aquí..."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Fila para el Mapa */}
      <Row className="justify-content-center">
        {" "}
        {/* Centra el contenido en la fila */}
        <Col md={10} lg={8} className="mb-4">
          {" "}
          {/* Ocupa 8 columnas en md, 6 en lg, para que coincida con el formulario */}
          <h4 className="text-center mb-3">Nuestra Ubicación</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.691763953535!2d-70.57943502476579!3d-33.51333790117079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d08a5c3d2f9d%3A0x6b7d5e4a8c9b3f!2sYour%20Location%20Name%20Here!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              title="Mapa de ubicación"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
