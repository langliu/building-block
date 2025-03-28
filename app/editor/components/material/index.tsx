export function Material() {
  return (
    <div className='h-[100vh] flex flex-col'>
      <div className='h-[60px] flex items-center border-b-[1px] border-[#000]'>
        Header
      </div>
      <div className='flex flex-col'>
        <div className='h-[60px] flex items-center border-b-[1px] border-[#000]'>
          Material
        </div>
        <div className='flex-1'>EditArea</div>
        <div className='h-[60px] flex items-center border-b-[1px] border-[#000]'>
          Setting
        </div>
      </div>
    </div>
  )
}
