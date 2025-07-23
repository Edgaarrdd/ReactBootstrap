import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import videoBg from "../assets/video/fastgo3.mp4";
import logoGrande from "../assets/images/favicon.png";

import mapa from "../assets/images/step/mapa.png";
import paquete from "../assets/images/step/paquete.png";
import rastreo from "../assets/images/step/rastreo-de-envio.png";
import recibido from "../assets/images/step/recibido.png";

import nike from "../assets/images/company/nike.png";
import pg from "../assets/images/company/p-g.png";
import pepsi from "../assets/images/company/pepsi.png";
import derco from "../assets/images/company/derco-center-seeklogo.png";
import starbucks from "../assets/images/company/starbucks.png";
import adidas from "../assets/images/company/adidas.png";

// Array of company logos for easier mapping in the carousel
const companyLogos = [
  { src: nike, alt: "Nike" },
  { src: pg, alt: "P&G" },
  { src: pepsi, alt: "Pepsi" },
  { src: derco, alt: "Derco" },
  { src: starbucks, alt: "Starbucks" },
  { src: adidas, alt: "Adidas" },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Video de fondo */}
      <section className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={videoBg} type="video/mp4" />
          Tu navegador no soporta el tag de video. {/* Fallback content */}
        </video>
        <div
          id="video-overlay"
          className="video-overlay-content text-center text-white"
        >
          <img src={logoGrande} alt="Logo" className="mb-4" height="200" />
          <h1 className="display-4">FastGo - Entregas Express</h1>
          <p className="lead">
            Entrega rápida. Tecnología al servicio de tu ciudad.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <Container className="my-5 py-3">
        <h2 className="text-center pb-5 mb-5">¿Por qué elegir FastGo?</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <Card bg="primary" text="white" className="h-100">
              <Card.Body>
                <Card.Title>Entregas en menos de 2 horas</Card.Title>
                <Card.Text>
                  Nos especializamos en entregas ultrarrápidas dentro de la
                  ciudad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg="primary" text="white" className="h-100">
              <Card.Body>
                <Card.Title>Seguimiento en tiempo real</Card.Title>
                <Card.Text>
                  Sigue tu pedido minuto a minuto para que sepas dónde está tu
                  paquete en todo momento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card bg="primary" text="white" className="h-100">
              <Card.Body>
                <Card.Title>Precios accesibles</Card.Title>
                <Card.Text>
                  Ofrecemos planes flexibles que se adaptan a tus necesidades y
                  presupuesto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Como Funciona*/}
      <Container className="py-5 mb-4">
        <h2 className="text-center pb-5 mb-5">¿Cómo funciona la app FastGo?</h2>
        <Row className="text-center">
          <Col md={3} className="mb-4">
            <img src={mapa} alt="Paso 1" className="mb-3" width="80" />
            <h5>1. Ingresa tu dirección</h5>
            <p>Abre la app y selecciona el lugar de recogida y el destino.</p>
          </Col>
          <Col md={3} className="mb-4">
            <img src={paquete} alt="Paso 2" className="mb-3" width="80" />
            <h5>2. Elige el tipo de envío</h5>
            <p>Selecciona express, estándar o especializado.</p>
          </Col>
          <Col md={3} className="mb-4">
            <img src={rastreo} alt="Paso 3" className="mb-3" width="80" />
            <h5>3. Sigue tu pedido</h5>
            <p>Observa en tiempo real cómo avanza el paquete.</p>
          </Col>
          <Col md={3} className="mb-4">
            <img src={recibido} alt="Paso 4" className="mb-3" width="80" />
            <h5>4. ¡Recibe y califica!</h5>
            <p>Recibe tu entrega, califica y revisa el historial.</p>
          </Col>
        </Row>
      </Container>

      {/* Empresas que confían */}
      <Container className="mb-5 py-3">
        <h2 className="text-center mb-5 pb-4">
          Empresas que confían en nosotros
        </h2>
        <Carousel controls={false} indicators={false} interval={2000}>
          <Carousel.Item>
            {/* agregúe nuevo wraper para el carousel*/}
            <div className="carousel-logos-wrapper">
              {companyLogos.slice(0, 3).map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  className="cliente-logo"
                  alt={logo.alt}
                />
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {/* Se agregó un nuevo div contenedor para el estilo de flexbox */}
            <div className="carousel-logos-wrapper">
              {companyLogos.slice(3, 6).map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  className="cliente-logo"
                  alt={logo.alt}
                />
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* CTA */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h2 className="mb-3">¿Listo para enviar con FastGo?</h2>
          <p className="mb-5">
            Regístrate o contáctanos para comenzar con entregas express.
          </p>
          <Button href="/contact" variant="light" size="lg">
            Contáctanos
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
