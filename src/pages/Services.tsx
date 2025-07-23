import { Container, Row, Card, Col } from "react-bootstrap";
import imgExpress from "../assets/images/services/20945973.jpg";
import imgStandard from "../assets/images/services/3881176.jpg";
import imgSpecialized from "../assets/images/services/20945523.jpg";
import imgScheduled from "../assets/images/services/4809513.jpg";
import imgReturn from "../assets/images/services/1123456.jpg";

{
  /* Servicios disponibles */
}
const services = [
  {
    title: "Envío Express",
    description:
      "Entrega en menos de 60 minutos. Ideal para documentos urgentes o paquetes pequeños.",
    price: "Desde $3.500 CLP",
    conditions: ["Máximo 5 kg", "No frágil sin embalaje", "8:00 a 20:00 hrs"],
    image: imgExpress,
    imageLeft: true,
  },
  {
    title: "Envío Estándar",
    description:
      "Entrega en el mismo día (hasta 6 horas). Económico para envíos no urgentes.",
    price: "Desde $2.500 CLP",
    conditions: ["Máximo 10 kg", "Reserva anticipada", "Lunes a sábado"],
    image: imgStandard,
    imageLeft: false,
  },
  {
    title: "Envío Especializado",
    description:
      "Para productos frágiles, documentos legales o electrónicos delicados.",
    price: "Desde $5.500 CLP",
    conditions: [
      "Embalaje obligatorio",
      "Firma en entrega",
      "Validación previa",
    ],
    image: imgSpecialized,
    imageLeft: true,
  },
  {
    title: "Entrega Programada",
    description:
      "Planifica una entrega con fecha y hora específica. Ideal para negocios.",
    price: "Desde $3.000 CLP",
    conditions: [
      "24h anticipación",
      "Disponible todos los días",
      "Modificable hasta 2h antes",
    ],
    image: imgScheduled,
    imageLeft: false,
  },
  {
    title: "Entrega con Retorno",
    description:
      "Incluye ida y regreso, ideal para documentos firmados o trámites.",
    price: "Desde $6.000 CLP",
    conditions: [
      "Retorno en 90 min",
      "Hasta 10 km total",
      "Tarifas extra si no se concreta",
    ],
    image: imgReturn,
    imageLeft: true,
  },
];

export default function Services() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Nuestros Servicios</h2>
      {services.map(
        (
          s,
          idx // Mapeamos los servicios
        ) => (
          <Card className="mb-4 bg-primary text-white" key={idx}>
            <Row className="g-0 align-items-center h-100">
              {s.imageLeft && (
                // Agregamos d-none y d-lg-block a la columna de la imagen
                <Col md={3} className="h-100 d-none d-lg-block">
                  <Card.Img
                    src={s.image}
                    alt={s.title}
                    className="img-fluid rounded-start h-100 w-100 object-fit-cover"
                  />
                </Col>
              )}

              {/* Ajustamos la columna de contenido para que ocupe todo el ancho cuando la imagen desaparece */}
              <Col
                md={7}
                lg={8}
                className="h-100 d-flex flex-column justify-content-center"
              >
                <Card.Body>
                  <Card.Title as="h3">{s.title}</Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                  <p>
                    <strong>Precio:</strong> {s.price}
                  </p>
                  <div>
                    <strong>Condiciones:</strong>{" "}
                    {/* Aquí usamos un div para mantener el estilo de lista */}
                    <ul className="list-unstyled ps-3 mb-0">
                      {s.conditions.map((c) => (
                        <li key={c}>- {c}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Col>

              {/* La columna de espacio también debe desaparecer */}
              <Col md={1} className="d-none d-lg-block"></Col>

              {!s.imageLeft && (
                // Lo mismo para la imagen de la derecha
                <Col md={3} className="h-100 d-none d-lg-block">
                  <Card.Img
                    src={s.image}
                    alt={s.title}
                    className="img-fluid rounded-end h-100 w-100 object-fit-cover"
                  />
                </Col>
              )}
              {/* La columna de espacio también debe desaparecer */}
              {!s.imageLeft && <Col md={1} className="d-none d-lg-block"></Col>}
            </Row>
          </Card>
        )
      )}
    </Container>
  );
}
