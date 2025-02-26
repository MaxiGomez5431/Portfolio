import { useState } from 'react';
import emailjs from 'emailjs-com';
import EmailResponses from './EmailResponses';
import { useTranslation } from "react-i18next";

export default function EmailForm() {
  const [sendState, setSendState] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { t } = useTranslation();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    
    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSendState("succesful")
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setSendState("unsuccesful")
        console.error('ERROR:', error);
      });
  };

  return (
    <>
    {
      sendState ? (

        <EmailResponses state={sendState}>
          <button 
            onClick={() => {setSendState("")}}
            className="p-2 m-1 w-8/12 bg-brand-blue-600 font-bold text-brand-blue-50 rounded-xl hover:bg-brand-blue-700 transition-colors"
          >
            {t("SendAnother")}
          </button>
        </EmailResponses>

      ) : (

        <form
          onSubmit={(e) => {
            setSendState("loading")
            sendEmail(e)
          }}
          className="flex justify-center items-center flex-col"
        >
          <input
            type="text"
            name="name"
            placeholder={t("Name")}
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
            placeholder={t("Message")}
            value={formData.message}
            onChange={handleChange}
            required
            className="m-1 p-2 rounded-2xl w-full h-24 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue-600"
          />
          <button
            type="submit"
            className="p-2 m-1 w-8/12 bg-brand-blue-600 font-bold text-brand-blue-50 rounded-xl hover:bg-brand-blue-700 transition-colors"
          >
            {t("Send")}
          </button>
        </form>
      )
    }
    </>
  );
}
