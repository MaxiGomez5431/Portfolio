function Title({children}) {
 

  return (
    <>
      <div className="inline-block relative m-5">
        <h3 className="text-2xl font-bold text-brand-blue-600 lg:text-4xl">{children}</h3>
        <div className="w-1/6 h-0.5  mx-auto rounded bg-brand-blue-600 border-brand-blue-600 absolute bottom-0 right-0"/>
      </div>
    </>
  )
}

export default Title