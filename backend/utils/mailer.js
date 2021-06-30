import nodemailer from "nodemailer";

const sendMail = async (data, order, orderItems) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "debonis.german@gmail.com",
      pass: "Arturo18!",
    },
  });

  await transporter.sendMail({
    from: '"Germán De Bonis" <debonis.german@gmail.com>',
    to: '"Germán De Bonis" <debonis.german@gmail.com>',
    subject: `${data.name} pidió una cotización desde el sitio web`,
    html: `
      <div>
        <h3>Pedido por el sitio web</h3>
        <div>Datos del cliente:</div>
        <div>
          <ul>
            <li>Nombre: <b>${data.name}</b></li>
            <li>Correo: <b>${data.email}</b></li>
            <li>Dirección: <b>${data.address}</b></li>
            <li>Provincia: <b>${data.province}</b></li>
            <li>Teléfono: <b>${data.phone}</b></li>
            ${
              data.socialReason
                ? `<li>Razón Social: <b>${data.socialReason}</b></li>`
                : ""
            }
            ${data.ruc ? `<li>RUC Empresa: <b>${data.ruc}</b></li>` : ""}
          </ul>
        <div>
        <div>
          <div>Datos del pedido:</div>
          <ul>
                <li>Nro. Orden: ${order}</li>
            ${orderItems.map((item) => {
              return `
                <li>Producto: ${item.name}</li>
                <li>Descripción: ${item.product.description}</li>
                <li>Código: ${item.product.code}</li>
                <li>Cantidad: ${item.qty}</li>
                <hr />
              `;
            })}
          </ul>
        </div>
      </div>
    `,
  });

  await transporter.sendMail({
    from: '"Germán De Bonis" <debonis.german@gmail.com>',
    to: "'" + data.name + "' " + data.email,
    subject: `${data.name} gracias por pedir una cotización`,
    html: `
      <div>
        <h3>Pedido por el sitio web</h3>
        <div>Tus datos:</div>
        <div>
          <ul>
            <li>Nombre: <b>${data.name}</b></li>
            <li>Correo: <b>${data.email}</b></li>
            <li>Dirección: <b>${data.address}</b></li>
            <li>Provincia: <b>${data.province}</b></li>
            <li>Teléfono: <b>${data.phone}</b></li>
            ${
              data.socialReason
                ? `<li>Razón Social: <b>${data.socialReason}</b></li>`
                : ""
            }
            ${data.ruc ? `<li>RUC Empresa: <b>${data.ruc}</b></li>` : ""}
          </ul>
        </div>
        <div>
          <div>Datos del pedido:</div>
          <ul>
                <li>Nro. Orden: ${order}</li>
            ${orderItems.map((item) => {
              return `
                <li>Producto: ${item.name}</li>
                <li>Descripción: ${item.product.description}</li>
                <li>Código: ${item.product.code}</li>
                <li>Cantidad: ${item.qty}</li>
                <hr />
              `;
            })}
          </ul>
        </div>
        <div>
            Cualquier duda contactarse por whatsapp al <a href='https://wa.me/+51977776527' target='_blank'>977776527</a>
        </div>
      </div>
    `,
  });
};

export default sendMail;
