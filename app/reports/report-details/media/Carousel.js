

import { Carousel } from "flowbite-react";
import { swrReportImages } from '@/app/swr/reportImages'
export default function Component() {
    const { data , error, isLoading,mutate } = swrReportImages()

  if(data) {
    if (data.length===0) return <div className="flex items-center font-semibold text-sm justify-center w-full pt-4">لاتوجد صور</div>

   return <div className="h-64">
    
      <Carousel slide={false}>
      {/* <img key={data[1].id} src={data[1].url} alt={data[0].url}/> */}
{data.map(image=>{

return <img className=" rounded-lg w-full h-full object-contain" key={image.id} src={image.url} alt={image.url} />
})}
        
      </Carousel>
    </div>
  }
}
