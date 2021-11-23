import nodemailer from "nodemailer";

const sendMail = async (data, order, orderItems) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log("SENDING EMAIL")

  await transporter.sendMail({
    from: '"Falling in Love" <ventas@fallinginlove.pe>',
    to: '"Falling in Love" <ventas@fallinginlove.pe>',
    subject: `${data.name} hizo una compra desde el Sitio Web`,
    html: `
      <div>
        <h3>Pedido por el sitio web</h3>
        <div>Datos del cliente:</div>
        <div>
          <ul>
              <li><strong>Nombre: </strong> ${data.name}</li>
              <li><strong>Email: </strong> ${data.email}</li>
              <li><strong>Dirección:</strong> ${data.address}</li>
              <li><strong>Provincia:</strong> ${data.province}</li>
              <li><strong>Distrito:</strong> ${data.district}</li>
              <li><strong>Teléfono:</strong> ${data.phone}</li>
              <li><strong>Factura:</strong> ${data.bill ? 'Si' : 'No'}</li>
              <li><strong>Razón Social:</strong> ${data.socialReason ? data.socialReason : '-'}</li>
              <li><strong>RUC:</strong> ${data.ruc ? data.ruc : '-'}</li>
          </ul>
        <div>
        <div>
          <div>Datos del pedido:</div>
          <ul>
                <li>Nro. Orden: ${order.billNumber}</li>
            ${orderItems.map((item) => {
      return `
                <li>Producto: ${item.name}</li>
                <li>Color: ${item.colorName}</li>
                <li>Talla: ${item.sizeName}</li>
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
    from: '"Falling in Love" <ventas@fallinginlove.pe>',
    to: data.email,
    subject: `${data.name} gracias por pedir en Falling In love`,
    html: `
      <div>
        <h3>Pedido por el sitio web</h3>
        <div>Datos del cliente:</div>
        <div>
          <ul>
              <li><strong>Nombre: </strong> ${data.name}</li>
              <li><strong>Email: </strong> ${data.email}</li>
              <li><strong>Dirección:</strong> ${data.address}</li>
              <li><strong>Provincia:</strong> ${data.province}</li>
              <li><strong>Distrito:</strong> ${data.district}</li>
              <li><strong>Teléfono:</strong> ${data.phone}</li>
              <li><strong>Factura:</strong> ${data.bill ? 'Si' : 'No'}</li>
              <li><strong>Razón Social:</strong> ${data.socialReason ? data.socialReason : '-'}</li>
              <li><strong>RUC:</strong> ${data.ruc ? data.ruc : '-'}</li>
          </ul>
        <div>
        <div>
          <div>Datos del pedido:</div>
          <ul>
                <li>Nro. Orden: ${order.billNumber}</li>
            ${orderItems.map((item) => {
      return `
                <li>Producto: ${item.name}</li>
                <li>Color: ${item.colorName}</li>
                <li>Talla: ${item.sizeName}</li>
                <li>Cantidad: ${item.qty}</li>
                <hr />
              `;
    })}
          </ul>
        </div>
      </div>
    `,
  });
};

export default sendMail;
