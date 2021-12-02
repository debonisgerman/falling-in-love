import nodemailer from "nodemailer";

const sendMailShipping = async (data, order) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: 'ventas@fallinginlove.pe',
    to: "'" + data.name + "' " + data.email,
    subject: `${data.name} Tu pedido está en camino`,
    html: `
      <div>
        <h3>Tu pedido está en camino</h3>
        <div>
          <a href="http://fallinginlove.pe:5000/order/${order._id}" target="_blank">Aquí</a> puedes seguir tu pedido.
        </div>
      </div>
    `,
  });
};

export default sendMailShipping;
