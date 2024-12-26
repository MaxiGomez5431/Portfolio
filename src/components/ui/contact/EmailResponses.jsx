import { IconCheckCircle, IconLoading, IconErrorCircle } from '../Icons';

export default function EmailResponses ({state, children}) {
  const iconStyle = "h-16 w-16 text-brand-blue-950 m-1"
  const textStyle = "text-brand-blue-950 m-1"

  return (
    <div className='flex flex-col justify-center items-center w-10/12 lg:w-5/12 h-auto border p-3 m-3 border-brand-blue-950 rounded-xl'>
       
      {state === "loading" ? (
        <>
          <IconLoading className={`${iconStyle} animate-spin`} />
          <p className={textStyle}>Enviando Email</p>
        </>
      ) : state === "succesful" ? (
        <>
          <IconCheckCircle className={`${iconStyle} text-green-600`}/>
          <p className={textStyle}>Email enviado exitosamente</p>
        </>
      ) : (
        <>
          <IconErrorCircle className={`${iconStyle} text-red-500`} />
          <p className={textStyle}>Error al enviar Email</p>
        </>
      )}

      {children}
    </div>
  )
}