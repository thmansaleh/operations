
import police from'@/public/police.png'
import rta from'@/public/rta.avif'
import Image from 'next/image'
function Logo() {
  return (
    <div className='flex  items-center justify-around '>
        <Image  className='w-16 h-16' src={police}/>
        <Image className='w-20 h-20' src={rta}/>
    </div>
  )
}

export default Logo