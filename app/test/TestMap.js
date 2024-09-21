"use client";

import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import { swrGetCarslatsAndLngs } from "../swr/getCarslatsAndLngs";

function TestMap() {
  // const position = { lat: 25.179533, lng: 55.315357 };
  const position = { lat: 25.272372773356242, lng: 55.41707890308244 };
  const { data ,isLoading } = swrGetCarslatsAndLngs()


 
 if(data) return <div className="flex-1">

    <LoadScript
      googleMapsApiKey="AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE"
      libraries={["geometry"]}
    >
      <div className="h-screen w-full">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={12}
          mapTypeId="hybrid"
        >
          {data.map(car=>{
// console.log(     JSON.parse(car.locations)
// )
return   <Polygon
            paths={JSON.parse(car.locations)}
            options={{
              fillColor: "green",
              fillOpacity: 0.50,
              strokeColor: "green",
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
          })}
         
        </GoogleMap>
      </div>
    </LoadScript>
    </div>
}

export default TestMap;
