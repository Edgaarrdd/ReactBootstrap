import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <>
      <Container className="my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">¿Quiénes Somos?</h2>
          <p className="text-muted">Conectamos la ciudad con tecnología y velocidad</p>
        </div>

        {/* Nuestra Empresa */}
        <section className="bg-light p-4 mb-4 rounded">
          <h4 className="border-start border-4 ps-3 fw-bold border-primary">Nuestra Empresa</h4>
          <p className="mt-3">
            En <strong>FastGo</strong>, somos una empresa de reparto urbano especializada en entregas express dentro de
            la ciudad. Nos enfocamos en brindar un servicio rápido, seguro y confiable, apoyándonos en tecnología de
            vanguardia para ofrecer una experiencia eficiente a nuestros clientes.
          </p>
          <p>
            Utilizamos una moderna app de seguimiento que permite a nuestros usuarios rastrear sus pedidos en tiempo
            real.
          </p>
        </section>

        {/* Nuestro equipo y nuestra historia */}
        <Row className="mb-4">
          <Col md={6}>
            <section className="p-4 bg-white shadow-sm rounded h-100 border-start border-primary border-4">
              <h4 className="fw-bold">Nuestro Equipo</h4>
              <p className="mt-3">
                Contamos con un equipo joven, dinámico y altamente capacitado, compuesto por repartidores, operadores
                logísticos y personal de atención al cliente comprometidos con la excelencia. Todos nuestros
                colaboradores comparten una misma meta: asegurar que cada entrega llegue a tiempo y en perfectas
                condiciones.
              </p>
            </section>
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <section className="p-4 bg-white shadow-sm rounded h-100 border-start border-success border-4">
              <h4 className="fw-bold">Nuestra Historia</h4>
              <p className="mt-3">
                FastGo nace en <strong>2020</strong> con el objetivo de revolucionar la logística urbana. Observamos una
                necesidad creciente por servicios de entrega ágiles, especialmente en contextos de alta demanda digital
                y compras en línea. Desde entonces, hemos crecido sostenidamente gracias a la confianza de nuestros
                clientes y a la mejora continua de nuestros procesos.
              </p>
            </section>
          </Col>
        </Row>

        {/* Misión y Visión */}
        <Row>
          <Col md={6}>
            <section className="p-4 bg-light rounded h-100 border-start border-info border-4">
              <h4 className="fw-bold">Misión</h4>
              <p className="mt-3">
                Nuestra misión es facilitar la vida de las personas y negocios, ofreciendo soluciones de reparto urbano
                rápidas y eficientes mediante tecnología, compromiso y calidad de servicio.
              </p>
            </section>
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <section className="p-4 bg-light rounded h-100 border-start border-warning border-4">
              <h4 className="fw-bold">Visión</h4>
              <p className="mt-3">
                Ser la empresa líder en reparto urbano en la ciudad, reconocida por su innovación, confiabilidad y
                enfoque centrado en el cliente, promoviendo una logística urbana sostenible y accesible para todos.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;