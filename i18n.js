import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      CVBtn: "Download CV",
      Home: "Home",
      AboutMe: "About me",
      WhoAmI: "Who Am I",
      WhoAmIText: "I'm a 22-year-old developer passionate about technology, with experience in JavaScript, Python, and React. I study Programming at UNAHUR (GPA 9.11) and constantly seek to learn and apply new technologies.",
      ResponsiveText: "I use modern CSS and frameworks like Tailwind and Bootstrap to create responsive designs. My focus is ensuring websites adapt to any device, optimizing user experience.",
      SoftSkillsText: "I possess skills like effective communication, teamwork, and problem-solving. These allow me to collaborate efficiently on projects, seeking innovative solutions and achieving goals creatively.",
      Studies: "Studies",
      StudiesText: "My education includes a Technical Degree in Programming (UNAHUR) and courses in JavaScript, Python, Oracle, and PostgreSQL. I specialize in creating functional, accessible, and user-centered web interfaces.",
      MyProjects: "My projects",
      Visit: "Visit page",
      Code: "View code",
      Contact: "Contact",
      Name: "Name",
      Message: "Message",
      Send: "Send Email",
      SendAnother: "Send another Email",
      Sending: "Sending Email",
      SentSuccesfull: "Email sent successfully",
      SendError: "Error sending Email",
    },
  },
  es: {
    translation: {
      CVBtn: "Descargar CV",
      Home: "Inicio",
      AboutMe: "Sobre mí",
      WhoAmI: "Quién Soy",
      WhoAmIText: "Soy un desarrollador de 22 años apasionado por la tecnología, con experiencia en JavaScript, Python y React. Estudio Programación en la UNAHUR (promedio 9.11) y busco constantemente aprender y aplicar nuevas tecnologías",
      ResponsiveText: "Utilizo CSS moderno y frameworks como Tailwind y Bootstrap para crear diseños responsive. Mi enfoque es garantizar que los sitios se adapten a cualquier dispositivo, optimizando la experiencia de usuario",
      SoftSkillsText: "Tengo habilidades como comunicación efectiva, trabajo en equipo y resolución de problemas. Estas me permiten colaborar eficientemente en proyectos, buscando soluciones innovadoras y alcanzando objetivos de manera creativa",
      Studies: "Estudios",
      StudiesText: "Mi formación incluye una Tecnicatura en Programación (UNAHUR) y cursos en JavaScript, Python, Oracle y PostgreSQL. Me especializo en crear interfaces web funcionales, accesibles y centradas en el usuario",
      MyProjects: "Mis proyectos",
      Visit: "Visitar página",
      Code: "Ver código",
      Contact: "Contacto",
      Name: "Nombre",
      Message: "Mensaje",
      Send: "Enviar Email",
      SendAnother: "Enviar otro Email",
      Sending: "Enviando Email",
      SentSuccesfull: "Email enviado con éxito",
      SendError: "Error al enviar Email",
    },
  },
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
