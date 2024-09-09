

import { Carousel } from "flowbite-react";
import { swrReportImages } from '@/app/swr/reportImages'
export function Component() {
    const { data , error, isLoading,mutate } = swrReportImages()

  if(data) return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
{data.map(image=>{

return <img src={image.url} alt="..." />
})}
        
      </Carousel>
    </div>
  );
}
