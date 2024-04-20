export default function Page() {
  return (
    <div className='container h-screen flex flex-row m-0 p-0 h-full'>
      <div className='columns-4 p-4 bg-slate-300 h-full shadow-md'>
        <p>Lists</p>
      </div>
      <div className='grow p-4 bg-slate-50'>
        <div className=''>Tasks</div>
      </div>
    </div>
  )
}
