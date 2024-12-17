import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

export default function InfoToCopy({textToCopy, children}) {
  
  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };
  
  return (
    <Tooltip
        placement="top"
        trigger={["click"]}
        overlay="Copiado al portapapeles"
      >
        <div
          className="flex items-center relative cursor-pointer "
          onClick={() => copyTextToClipboard(textToCopy)}
        >
          {children}
        </div>
      </Tooltip>
  )
}