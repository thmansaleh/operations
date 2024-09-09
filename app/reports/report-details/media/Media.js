import { swrReportImages } from '@/app/swr/reportImages'
import Carousel from './Carousel'
import { Spinner } from 'flowbite-react'
function Media() {
  const { data , error, isLoading,mutate } = swrReportImages()
  if (isLoading) return <div className="flex items-center justify-center w-full pt-4"><Spinner color='success'/></div>
  return <>
<Carousel/>
  </>
  
}

export default Media