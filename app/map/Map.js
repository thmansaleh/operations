import { Map, APIProvider, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import { swrCars } from "../swr/cars"
import { swrRecentReports } from "../swr/recentReports"
import CarOutside from "./CarOutside"
import { useDispatch } from "react-redux"
import { actions, setReportId } from "../store/features/reports"
function MapContent() {
    

    const position={lat:25.179533,lng:55.315357}
    return <APIProvider
     apiKey="AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE"
     >

               <div className="h-screen w-full">
                <Map 
options={{ language: "ar" }}
                 defaultZoom={12}  
                 defaultCenter={position} 
                //  onClick={handleMapClick}
                //  mapTypeId="satellite"  
                 mapTypeId="hybrid"
                 mapTypeControl={false}
                 streetViewControl={false}

                 mapId="a0e2b8d424136ecf"
                 >
<CarsMarkers/>
<Reports/>
                </Map>
            </div>
    </APIProvider>

}

export default MapContent
const CarsMarkers=()=>{
    const { data , error, isLoading } = swrCars()

   if(data)  return <>
     {data.map(point=>{
         return <AdvancedMarker position={point.is_match?{lat:Number(point.current_lat),lng:Number(point.current_lng)}:{lat:Number(point.lat),lng:Number(point.lng)}} key={point.lat}>
            {point.type=='patrol'?<CarOutside point={point}/>:null}
{point.type==='recovery'?<div class="flex flex-col items-center gap-y-2">
    
    <div className="w-5 h-5 bg-yellow-600  rounded-full flex justify-center items-center text-xs text-white font-semibold">{point.nida}</div>
    <div className="w-7 h-7 bg-white flex  items-center justify-center rounded-full ">
    <svg className="w-5 h-5 fill-black " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M80.08 82.66L60.24 102.5 192.9 242.7v58.6h78v-50.9zm-25.4 40.14v80.3l4.01 2.7c10.56 7 14.74 14.1 15.93 19.8 1.18 5.8-.43 10.8-3.85 14.9-6.86 8.3-19.91 12.3-32.73-.6l-12.72 12.8c19.18 19.1 46.13 15.1 59.27-.6 6.58-7.9 9.97-18.9 7.65-30.1-2.05-10-8.72-19.7-19.56-28v-52.2zm258.02 52.5v144h-185c22.6 5.8 40.6 23.5 46.7 46H337c7.5-27.6 32.8-48 62.7-48 29.9 0 55.2 20.4 62.7 48h24.3v-84.6l-60.2-105.4zm36 14h62.1l54.7 92H348.7v-83zm-321.49 130l11.5 46h10.25c6.12-22.5 24.09-40.2 46.74-46zm84.49 16c-26.08 0-47.02 20.9-47.02 47s20.94 47 47.02 47c26.1 0 47-20.9 47-47s-20.9-47-47-47zm288 0c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47z"></path></svg>
    </div>
    </div>:null}
        </AdvancedMarker>
     })}
     </>
}
const Reports=()=>{
    const { data , error, isLoading } = swrRecentReports()
    const dispatch=useDispatch()
    const handleMapClick = (id) => {

        dispatch(setReportId(id))
        dispatch(actions({action:'reportNav',data:'info'}))
  
        dispatch(actions({action:'mapReportModal',data:true}))
        
    };

   if(data)  return <>
     {data.map(report=>{
         return <AdvancedMarker
         onClick={()=>handleMapClick(report.id)}

          position={{lat:Number(report.lat),lng:Number(report.lng)}} key={report.lat}>
           <div class="flex flex-col items-center gap-y-2">
    
    <div className="p-1 bg-yellow-600  rounded-lg flex justify-center items-center text-xs text-white font-semibold">{report.type}</div>
    <div className="w-8 h-8 bg-white flex  items-center justify-center rounded-full ">
   <svg className="w-6 h-6 fill-red-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M143.25 220.81l-12.42 46.37c-3.01 11.25-3.63 22.89-2.41 34.39l-35.2 28.98c-6.57 5.41-16.31-.43-14.62-8.77l15.44-76.68c1.06-5.26-2.66-10.28-8-10.79l-77.86-7.55c-8.47-.82-11.23-11.83-4.14-16.54l65.15-43.3c4.46-2.97 5.38-9.15 1.98-13.29L21.46 93.22c-5.41-6.57.43-16.3 8.78-14.62l76.68 15.44c5.26 1.06 10.28-2.66 10.8-8l7.55-77.86c.82-8.48 11.83-11.23 16.55-4.14l43.3 65.14c2.97 4.46 9.15 5.38 13.29 1.98l60.4-49.71c6.57-5.41 16.3.43 14.62 8.77L262.1 86.38c-2.71 3.05-5.43 6.09-7.91 9.4l-32.15 42.97-10.71 14.32c-32.73 8.76-59.18 34.53-68.08 67.74zm494.57 132.51l-12.42 46.36c-3.13 11.68-9.38 21.61-17.55 29.36a66.876 66.876 0 0 1-8.76 7l-13.99 52.23c-1.14 4.27-3.1 8.1-5.65 11.38-7.67 9.84-20.74 14.68-33.54 11.25L515 502.62c-17.07-4.57-27.2-22.12-22.63-39.19l8.28-30.91-247.28-66.26-8.28 30.91c-4.57 17.07-22.12 27.2-39.19 22.63l-30.91-8.28c-12.8-3.43-21.7-14.16-23.42-26.51-.57-4.12-.35-8.42.79-12.68l13.99-52.23a66.62 66.62 0 0 1-4.09-10.45c-3.2-10.79-3.65-22.52-.52-34.2l12.42-46.37c5.31-19.8 19.36-34.83 36.89-42.21a64.336 64.336 0 0 1 18.49-4.72l18.13-24.23 32.15-42.97c3.45-4.61 7.19-8.9 11.2-12.84 8-7.89 17.03-14.44 26.74-19.51 4.86-2.54 9.89-4.71 15.05-6.49 10.33-3.58 21.19-5.63 32.24-6.04 11.05-.41 22.31.82 33.43 3.8l122.68 32.87c11.12 2.98 21.48 7.54 30.85 13.43a111.11 111.11 0 0 1 34.69 34.5c8.82 13.88 14.64 29.84 16.68 46.99l6.36 53.29 3.59 30.05a64.49 64.49 0 0 1 22.74 29.93c4.39 11.88 5.29 25.19 1.75 38.39zM255.58 234.34c-18.55-4.97-34.21 4.04-39.17 22.53-4.96 18.49 4.11 34.12 22.65 39.09 18.55 4.97 45.54 15.51 50.49-2.98 4.96-18.49-15.43-53.67-33.97-58.64zm290.61 28.17l-6.36-53.29c-.58-4.87-1.89-9.53-3.82-13.86-5.8-12.99-17.2-23.01-31.42-26.82l-122.68-32.87a48.008 48.008 0 0 0-50.86 17.61l-32.15 42.97 172 46.08 75.29 20.18zm18.49 54.65c-18.55-4.97-53.8 15.31-58.75 33.79-4.95 18.49 23.69 22.86 42.24 27.83 18.55 4.97 34.21-4.04 39.17-22.53 4.95-18.48-4.11-34.12-22.66-39.09z"></path></svg>
    </div>
    </div>

        </AdvancedMarker>
     })}
     </>
}

