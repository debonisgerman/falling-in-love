import nodemailer from "nodemailer";

const sendMailShipping = async (data, order) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.EMAIL_HOST,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: '"Falling in Love" <ventas@fallinginlove.pe>',
        to: "'" + data.name + "' " + data.email,
        subject: `${data.name} Tu pedido está en camino`,
        html: `
      <div>
        <h3>Tu pedido está en camino</h3>
        <div>
          <a href="https://falling-in-love.herokuapp.com/order/${order._id}" target="_blank">Aquí</a> puedes seguir tu pedido.
        </div>
      </div>
    `,
    });
};

export default sendMailShipping;
