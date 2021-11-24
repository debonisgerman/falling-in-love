import nodemailer from "nodemailer";

const sendContactMail = async (data, order, orderItems) => {
  try
  {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    console.log("data", data);

    await transporter.sendMail({
      from: '"Falling in Love" <ventas@fallinginlove.pe>',
      // to: '"Falling in Love" <ventas@fallinginlove.pe>',
      to: 'debonis.german@gmail.com',
      subject: `${data.name} hizo una consulta`,
      html: `
      <div>
        <h3>Consulta web</h3>
        <div>Datos del cliente:</div>
        <div>
          <ul>
              <li><strong>Nombre: </strong> ${data.name}</li>
              <li><strong>Email: </strong> ${data.email}</li>
              <li><strong>Dirección:</strong> ${data.address}</li>
              <li><strong>Teléfono:</strong> ${data.phone}</li>
              <li><strong>Mensaje:</strong> ${data.commentary}</li>
          </ul>
        </div>
      </div>
    `,
    });

    return true;
  } catch (error)
  {
    return false;
  }
};

export default sendContactMail;
