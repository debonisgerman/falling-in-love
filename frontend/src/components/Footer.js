import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="text-white navbar-dark bg-dark">
      <Container className="text-light">
        <Row className="py-3">
          <Col md={4} className="text-center">
            <Image
              src="/images/logo2.png"
              alt="logo"
              fluid="true"
              className="logoFooter"
            />
          </Col>
          <Col md={4} className="text-center">
            <div className="my-3">
              <div className="mb-2">
                <a href="tel:913059930" target="_blank" rel="noreferrer">
                  <i className="fas fa-phone pr-2"></i>
                  913059930
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://wa.me/message/BC3M5NM7LNWAE1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp pr-2"></i>
                  913059930
                </a>
              </div>
              <hr className="bg-light" />
              <div className="mb-2">
                <a
                  href="mailto:hola@fallinginlove.pe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope pr-2"></i>
                  hola@fallinginlove.pe
                </a>
              </div>
              <hr className="bg-light" />
              <div className="flex justify-content-around align-items-center">
                <Link
                  to="/find-us"
                >
                  <i className="fas fa-book pr-2"></i>
                  Libro de Reclamaciones
                </Link>
                <a
                  rel="noreferrer"
                  onClick={handleShow}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-book pr-2"></i>
                  Términos y Condiciones
                </a>
                <Modal id="termsModal" show={show} onHide={handleClose}>
                  <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    <h4><b>Términos y Condiciones</b></h4>
                    <hr />
                    <p>Bienvenido a Falling in love. Su completa satisfacción es nuestro principal objetivo. Queremos que tenga una experiencia de compra excelente, segura y fácil. Además, valoramos mucho sus sugerencias y comentarios. No dude en ponerse en contacto con nosotros para cualquier cosa que pueda necesitar.</p>
                    <h6><b>ENVÍOS Y ENTREGAS</b></h6>
                    <p>
                      LIMA METROPOLITANA: Todas las compras por montos menores a S/150 tendrán un costo de envío de S/10.00. <b>Envíos gratis por compras mayores a S/150</b>. Tiempo de entrega de 3 días hábiles contados desde la fecha que realizaste tu compra, en el horario de 9am a 7pm.
                    </p>
                    <p>
                      RECÍBELO HASTA EN 24 HORAS – LIMA METROPOLITANA: Tiene un costo fijo de S/15. Tiempo de entrega dentro de las siguientes 24 horas hábiles. (Consulta si tu distrito está incluido en la cobertura)
                    </p>
                    <p>
                      PROVINCIAS PERÚ: Todas las compras por montos menores a S/150 tendrán un costo de envío de S/15.00. <b>Envíos gratis por compras mayores a S/150.</b> Tiempo de entrega de 3 a 5 días hábiles contados desde la fecha que realizaste tu compra.
                    </p>
                    <p>
                      Los envíos se hacen por Olva Courier y se te brindara el número de tracking con el que podrás hacer seguimiento de tu pedido.
                    </p>
                    <p>
                      El pedido se puede programar para que llegue a la dirección dada al momento de realizar la compra o también para recojo en la agencia de Olva Courier de la ciudad de destino.
                    </p>
                    <p>
                      <b>Aplica para todos los envíos:</b>
                    </p>
                    <p>
                      <ul>
                        <li>Todas las compras realizadas los días Sábado, Domingo y/o feriados se despachará a partir del día hábil siguiente.</li>
                        <li>Todos los pedidos realizados después de las 12pm se enviarán al día hábil siguiente.</li>
                        <li>Cualquier persona mayor de 18 años que se encuentre en el domicilio de entrega puede recibir el producto siempre que exhiba la orden de compra (correo de confirmación) y acredite su identidad. Todas las entregas requieren la identificación y firma del receptor.</li>
                        <li>Falling in love no se responsabiliza por los costos extra o la demora en la entrega de tu producto, en caso el Courier no pudiera ubicar a ninguna persona en el domicilio que señalaste. Si tienes preguntas o dudas por favor escríbenos al WhatsApp
                          <a
                            href="https://wa.me/message/BC3M5NM7LNWAE1"
                            target="_blank"
                            rel="noreferrer"
                          > 913059930</a> o al correo
                          <a
                            href="mailto:hola@fallinginlove.pe"
                            target="_blank"
                            rel="noreferrer"
                          > hola@fallinginlove.pe</a>.</li>

                      </ul>
                    </p>
                    <p>
                      <b>POLÍTICA DE CAMBIOS Y DEVOLUCIONES</b>
                    </p>
                    <p>
                      <ul>
                        <li>El plazo máximo para cambios y/o devoluciones es de 7 días.</li>
                        <li>Es indispensable presentar el comprobante de pago. (Enviado a tu correo)</li>
                        <li>La prenda debe conservar su etiqueta y no mostrar ningún signo de uso.</li>
                        <li>Las prendas adquiridas en liquidación no están sujetas a cambios ni devoluciones.</li>
                        <li>Si la prenda se encuentra dañada, por no seguir las instrucciones de cuidado indicadas en las etiquetas, los cambios o devoluciones no proceden.</li>
                      </ul>
                    </p>
                    <p>
                      NOTA: Se rechazará el cambio de prendas dañadas, sucias, lavadas o cuyas etiquetas hayan sido retiradas. Los productos recibidos en estas condiciones serán devueltos y el comprador deberá asumir los costos de envío.
                    </p>
                    <p>
                      Para que proceda tu solicitud de cambio, realizaremos un control de calidad para corroborar las condiciones del producto.
                    </p>
                    <p>
                      Aprobado el cambio, Falling in love enviará al correo electrónico un cupón de descuento por el monto original de tu compra. El cupón no es acumulable o compatible con otras promociones y expirará a los 15 días contados desde que aprobamos el cambio de tu producto.
                    </p>
                    <p>
                      <b>Las solicitudes de cambio que no sigan esta política serán rechazadas.</b>
                    </p>
                    <p>
                      <b>IMPORTANTE:</b>
                    </p>
                    <p>
                      <ul>
                        <li>Las compras y los cupones de descuento no son reembolsables.</li>
                        <li>Solo se permite un cambio por producto.</li>
                        <li>Los cupones de descuento se emitirán por única vez.</li>
                        <li>Falling in love se reserva el derecho de rechazar los empaques visiblemente dañados.</li>
                      </ul>
                    </p>
                    <p>
                      <b>Excepciones</b>
                    </p>
                    <p>
                      Los productos adquiridos en la sección Liquidación o tengan un descuento igual o mayor al 50%, no están sujetos a cambios ni devoluciones.
                    </p>
                    <p>
                      <b>Cambio o Devolución</b>
                    </p>
                    <p>
                      Podrán hacerlo enviándolo por delivery a la oficina de Falling in Love o solicitar el recojo bajo costo del cliente*.
                    </p>
                    <p>
                      *La dirección se te indicará al contactarnos.
                    </p>
                    <p>
                      *Provincias: El cliente debe asumir los gastos de envío salvo errores de fábrica.
                    </p>
                    <p>
                      La devolución vía correo postal, dependiendo del servicio de envío puede tomar entre 7 a 10 días hábiles en llegar a nuestras oficinas y otros 2 días hábiles en ser evaluado. Si no hubiera discrepancias se pasará al proceso de reembolso.
                    </p>
                    <p>
                      Nota:
                    </p>
                    <p>
                      Falling in love solo aceptará la devolución de productos que presenten defectos de fábrica.
                      Para la devolución del producto aplica la misma política establecida para el cambio de productos.<b> Las solicitudes de cambio que no sigan esta política serán rechazadas.</b>
                    </p>
                    <p>
                      <b>Reembolso</b>
                    </p>
                    <p>
                      Si la compra se realizó con tarjetas de crédito o débito, se envían los datos al procesador de pagos (Visa, MasterCard, Diners o American Express) quien gestiona el reembolso con el banco emisor de la tarjeta, el proceso demora 30 días en promedio, dependiendo de los procedimientos y protocolos del banco para estos casos.
                    </p>
                    <p>
                      Si la compra se realizó mediante transferencia se procede a gestionar internamente la devolución al número de cuenta bancaria del cliente. El proceso demora 7 días en promedio.
                    </p>
                    <p>
                      <b>POLÍTICA DE PRIVACIDAD</b>
                    </p>
                    <p>
                      Respetamos completamente su privacidad y confidencialidad. La información que nos proporciona se usa sólo con fines de pago y envío. Si usted es un usuario registrado, le enviaremos ocasionalmente correos electrónicos promocionales.
                    </p>
                    <p>
                      <b>PAGOS</b>
                    </p>
                    <p>
                      La compra es online. Puedes pagar con cualquier tarjeta de crédito o débito. Contamos con la plataforma de pagos.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="mb-3">
              <h5 className="my-3">¡Síguenos!</h5>
              <div className="my-2 social-network">
                <Row className="text-center justify-content-center">
                  <a
                    href="https://www.facebook.com/Falling-in-Love-775386406168379"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "cornflowerblue",
                    }}
                  >
                    <i
                      className="fab fa-facebook py-2 mr-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/fallinginlove.pe/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <i
                      className="fab fa-instagram py-2 mr-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                  <a
                    href="https://wa.me/message/BC3M5NM7LNWAE1"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ml-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "green",
                    }}
                  >
                    <i
                      className="fab fa-whatsapp py-2 mr-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; GIK Digital {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
