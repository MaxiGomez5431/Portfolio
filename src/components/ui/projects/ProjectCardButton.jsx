export function ProjectCardButton ({url, text}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
    >

      <button
        className="p-2 m-1 w-30 bg-brand-blue-600 font-bold text-brand-blue-50 rounded-xl hover:bg-brand-blue-700 transition-colors"
      >
        {text}
      </button>
      
    </a>
  ) 
}