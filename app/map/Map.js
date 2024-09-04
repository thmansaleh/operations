import { Map, APIProvider, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import { swrCars } from "../swr/cars"
import { swrRecentReports } from "../swr/recentReports"
function MapContent() {
    const handleMapClick = (e) => {
        // const lat = e.latLng.lat();
        // const lng = e.latLng.lng();
        // console.log("Latitude:", lat, "Longitude:", lng);
        console.log(e.detail.latLng)
    };

    const position={lat:25.179533,lng:55.315357}
    return <APIProvider apiKey="AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE">

               <div className="h-screen w-full">
                <Map 
                 defaultZoom={12}  
                 defaultCenter={position} 
                 onClick={handleMapClick}
                 mapId="a0e2b8d424136ecf">
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
         return <AdvancedMarker position={{lat:Number(point.lat),lng:Number(point.lng)}} key={point.lat}>
            {point.type!='patrol'&&<div className="bg-white text-white   font-semibold w-10 rounded-full flex justify-center items-center h-10">
                <div>
<svg className="h-6 w-6 flex-shrink-0  fill-neutral-950 transition duration-75  " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M80.08 82.66L60.24 102.5 192.9 242.7v58.6h78v-50.9zm-25.4 40.14v80.3l4.01 2.7c10.56 7 14.74 14.1 15.93 19.8 1.18 5.8-.43 10.8-3.85 14.9-6.86 8.3-19.91 12.3-32.73-.6l-12.72 12.8c19.18 19.1 46.13 15.1 59.27-.6 6.58-7.9 9.97-18.9 7.65-30.1-2.05-10-8.72-19.7-19.56-28v-52.2zm258.02 52.5v144h-185c22.6 5.8 40.6 23.5 46.7 46H337c7.5-27.6 32.8-48 62.7-48 29.9 0 55.2 20.4 62.7 48h24.3v-84.6l-60.2-105.4zm36 14h62.1l54.7 92H348.7v-83zm-321.49 130l11.5 46h10.25c6.12-22.5 24.09-40.2 46.74-46zm84.49 16c-26.08 0-47.02 20.9-47.02 47s20.94 47 47.02 47c26.1 0 47-20.9 47-47s-20.9-47-47-47zm288 0c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47z"></path></svg>

</div>
</div>}
{point.type=='patrol'&&<div className="bg-white text-white   font-semibold w-10 rounded-full flex justify-center items-center h-10">
                <div>            <svg  className="h-6 w-6 fill-green-500 flex-shrink-0  transition duration-75  "  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>

</div>
</div>}
        </AdvancedMarker>
     })}
     </>
}
const Reports=()=>{
    const { data , error, isLoading } = swrRecentReports()

   if(data)  return <>
     {data.map(report=>{
         return <AdvancedMarker position={{lat:Number(report.lat),lng:Number(report.lng)}} key={report.lat}>
            <div className=" flex justify-center items-center flex-col gap-y-3 ">
             <div onClick={()=>console.log(1)} className="bg-yellow-500  text-white font-semibold text-center py-3 rounded-lg w-28">{report.type}
             </div>
             <div className=" text-white     font-semibold w-10 rounded-full flex justify-center items-center flex-col h-10">


<svg  className="h-14 w-14  flex-shrink-0  fill-yellow-500 transition duration-75  " stroke="currentColor" fill="currentColor" strokeWidth="0"xmlns="http://www.w3.org/2000/svg"  height="800px" width="800px" viewBox="0 0 480.825 480.825" >
<g>
	<path d="M290.207,188.296c-2.823-1.735-6.519-0.856-8.254,1.966l-45.567,74.047c-1.737,2.822-0.857,6.518,1.965,8.255   c0.98,0.603,2.066,0.891,3.139,0.891c2.015,0,3.982-1.015,5.116-2.856l45.567-74.047   C293.909,193.729,293.029,190.033,290.207,188.296z"/>
	<path d="M222.466,244.96c1.166,1.676,3.033,2.574,4.931,2.574c1.182,0,2.377-0.35,3.421-1.075c2.72-1.893,3.392-5.632,1.499-8.352   l-34.175-49.127c-1.892-2.719-5.631-3.39-8.352-1.499c-2.72,1.893-3.392,5.632-1.499,8.353L222.466,244.96z"/>
	<path d="M240.793,227.091c0.52,0.139,1.04,0.205,1.554,0.205c2.65,0,5.076-1.77,5.793-4.452l19.224-71.91   c0.856-3.201-1.045-6.49-4.247-7.347c-3.204-0.854-6.491,1.046-7.346,4.247l-19.224,71.91   C235.69,222.945,237.592,226.234,240.793,227.091z"/>
	<path d="M274.393,249.834c1.03,2.154,3.178,3.412,5.417,3.412c0.868,0,1.749-0.189,2.584-0.588l16.375-7.831   c2.99-1.43,4.254-5.012,2.825-8.002c-1.429-2.989-5.012-4.253-8.001-2.824l-16.375,7.831   C274.228,243.262,272.964,246.844,274.393,249.834z"/>
	<path d="M221.889,201.065c0.716,2.685,3.141,4.456,5.793,4.456c0.512,0,1.032-0.066,1.55-0.204   c3.202-0.855,5.105-4.142,4.251-7.344l-11.391-42.72c-0.854-3.201-4.141-5.103-7.343-4.252c-3.202,0.854-5.105,4.142-4.251,7.344   L221.889,201.065z"/>
	<path d="M234.214,287.646h-0.403v-5.336c0-4.824-3.917-7.322-7.247-8.35l-4.479-8.423c-0.61-1.148-1.741-1.928-3.031-2.091   l-34.26-4.324l-31.767-50.333c-0.733-1.161-2.01-1.865-3.383-1.865H60.69c-1.641,0-3.115,1.002-3.719,2.527l-18.482,46.66H21.128   c-8.945,0-14.075,5.13-14.075,14.075v17.713C3.012,288.872,0,292.517,0,296.852v6.92c0,5.076,4.13,9.205,9.206,9.205h20.963   c2.054,13.824,13.998,24.466,28.384,24.466c14.387,0,26.332-10.642,28.386-24.466l69.541,0.001   c2.054,13.824,13.998,24.465,28.383,24.465c14.387,0,26.332-10.641,28.386-24.465h20.964c5.076,0,9.205-4.13,9.205-9.206v-6.92   C243.419,291.775,239.29,287.646,234.214,287.646z M58.553,319.442c-5.899,0-10.698-4.8-10.698-10.7c0-5.9,4.799-10.7,10.698-10.7   c5.9,0,10.7,4.8,10.7,10.7C69.253,314.643,64.453,319.442,58.553,319.442z M184.864,319.442c-5.899,0-10.698-4.8-10.698-10.7   c0-5.9,4.799-10.7,10.698-10.7c5.9,0,10.701,4.8,10.701,10.7C195.564,314.643,190.764,319.442,184.864,319.442z"/>
	<path d="M473.772,287.899v-17.713c0-8.945-5.13-14.075-14.076-14.075h-17.361l-18.482-46.66c-0.604-1.525-2.078-2.527-3.719-2.527   h-76.493c-1.373,0-2.65,0.704-3.383,1.865l-31.767,50.333l-34.26,4.324c-1.29,0.163-2.42,0.942-3.031,2.091l-4.479,8.423   c-3.331,1.027-7.247,3.525-7.247,8.35v5.336h-0.403c-5.076,0-9.206,4.13-9.206,9.206v6.92c0,5.076,4.129,9.206,9.206,9.206h20.964   c2.054,13.824,13.999,24.465,28.386,24.465c14.385,0,26.33-10.641,28.383-24.465l57.081-0.001   c2.054,13.824,13.999,24.466,28.386,24.466c14.386,0,26.33-10.642,28.384-24.466h20.963c5.076,0,9.206-4.129,9.206-9.205v-6.92   C480.825,292.517,477.814,288.872,473.772,287.899z M308.422,319.442c-5.9,0-10.701-4.8-10.701-10.7c0-5.9,4.8-10.7,10.701-10.7   c5.899,0,10.698,4.8,10.698,10.7C319.121,314.643,314.321,319.442,308.422,319.442z M422.272,319.442c-5.9,0-10.7-4.8-10.7-10.7   c0-5.9,4.8-10.7,10.7-10.7c5.899,0,10.698,4.8,10.698,10.7C432.97,314.643,428.171,319.442,422.272,319.442z"/>
</g>
</svg>
</div>


</div>

        </AdvancedMarker>
     })}
     </>
}
