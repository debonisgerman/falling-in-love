import nodemailer from "nodemailer";

const sendMailPriced = async (order) => {
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    console.log("SENDING EMAIL");

    await transporter.sendMail({
        from: 'ventas@fallinginlove.pe',
        to: order.shippingAddress.email,
        subject: `${order.shippingAddress.name} tu pago ha sido aprobado`,
        html: `
      <div>
        <h3>Pedido por el sitio web</h3>
        <div>
          <div>Datos del pedido:</div>
          <ul>
                <li>Nro. Orden: ${order.billNumber}</li>
            ${order.orderItems.map((item) => {
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
        <div>
          <a href="http://fallinginlove.pe/order/${order._id}" target="_blank">Aquí</a> puedes seguir tu pedido.
        </div>
      </div>
    `,
    });
};

export default sendMailPriced;
