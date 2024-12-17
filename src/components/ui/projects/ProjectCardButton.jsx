export function ProjectCardButton ({url, text}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
    >

      <button
        className="p-2 m-1 text-base 
      bg-brand-blue-600 font-bold 
      text-brand-blue-50 rounded-xl"
      >
        {text}
      </button>
      
    </a>
  ) 
}