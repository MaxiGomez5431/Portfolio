export default function Tooltip ({tooltipNumber, selectedNumber, text}) {
  return (
    <div className={`absolute left-[105%] rounded-2xl p-1 pl-2 pr-2 shadow-lg bg-brand-blue-50 duration-100 ${selectedNumber === tooltipNumber ? 'opacity-100' : 'opacity-0'}`}>
      <p>{text}</p>
      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-brand-blue-50"/>
    </div>
  )
}