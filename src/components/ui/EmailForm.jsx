import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    //USAR VARIABLES DE ENTORNO
    const serviceID = ''; //ACA
    const templateID = ''; //ACA
    const publicKey = ''; //ACA

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert('Correo enviado correctamente.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('ERROR:', error);
        alert('Hubo un error al enviar el correo.');
      });
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex justify-center items-center flex-col"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
        className="m-1 p-2 rounded-2xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="m-1 p-2 rounded-2xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        className="m-1 p-2 rounded-2xl w-full h-24 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
      />
      <button
        type="submit"
        className="p-2 m-1 w-8/12 bg-brand-blue-600 font-bold text-brand-blue-50 rounded-xl hover:bg-brand-blue-700 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
