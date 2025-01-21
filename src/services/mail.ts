import fs from "fs/promises";
import handlebars from "handlebars";
import nodemailer from "nodemailer";
import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const loadTemplate = async (
  templateName: string,
  replacements: Record<string, any>
): Promise<string> => {
  const templatePath = path.join(
    __dirname,
    "../template",
    `${templateName}.html`
  );
  const templateFile = await fs.readFile(templatePath, "utf8");
  const compiledTemplate = handlebars.compile(templateFile);
  return compiledTemplate(replacements);
};

export const sendEmail = async (
  to: string,
  subject: string,
  templateName: string,
  replacements: Record<string, any>
) => {
  try {
    const htmlContent = await loadTemplate(templateName, replacements);

    const mailOptions = {
      from: "adm@gestordopovo.com",
      to,
      subject,
      html: htmlContent,
    };

    return await transporter
      .sendMail(mailOptions)
      .then((info) => {
        console.log(info);
        return info;
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        throw error;
      });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
};
