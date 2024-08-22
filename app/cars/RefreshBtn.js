import { Button } from 'flowbite-react'
import { swrCars } from '../swr/cars'

function RefreshBtn() {
    const { mutate } = swrCars()

  return (
    <Button
    onClick={()=>{
mutate()
    }}
     className='flex items-center gap-x-6 ' size='sm'  >
تحديث   
 {/* <svg stroke="currentColor"  className="h-6 w-6 rotate-180 flex-shrink-0 fill-white transition duration-75  "fill="currentColor" strokeWidth="0" viewBox="0 0 20 20"  data-testid="flowbite-sidebar-item-icon"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
 <svg className="h-6 w-6 rotate-180 flex-shrink-0 fill-white transition duration-75"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"></path></svg>

  </Button>  )
}

export default RefreshBtn