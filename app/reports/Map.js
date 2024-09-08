import { Map, APIProvider, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { add as addReport } from "@/app/store/features/addReport"
import { useDispatch, useSelector } from "react-redux";


function MapComponent() {
    const [pins, setPins] = useState([]);
    const dispatch =useDispatch()
    const report =useSelector(state=>state.addReport)


    const handleMapClick = (e) => {
        // const latLng = e.detail.latLng;
        setPins([{ lat: e.detail.latLng.lat, lng: e.detail.latLng.lng }]);
        dispatch(addReport({action:'location',data:e.detail.latLng}))
console.log(report)
        // dispatch(addReport({action:'location',data:e.detail.latLng}))

    };
  

    const position = { lat: 25.179533, lng: 55.315357 };

    return (
        <APIProvider
         apiKey="AIzaSyD7e4cuSEMpIyLgiLM5skxZ7S6F9DXtggE"
         >
            <div className="h-screen w-full">
                <Map 
                    defaultZoom={12}  
                    defaultCenter={position} 
                    onClick={handleMapClick}
                    mapTypeControl={false}
                    streetViewControl={false}
                    mapTypeId="hybrid"

                    mapId="a0e2b8d424136ecf">
                        
                    {pins.map((pin, index) => (
                        <AdvancedMarker
                            key={index}
                            position={pin}
                        />
                    ))}
                </Map>
            </div>
        </APIProvider>
    );
}

export default MapComponent;
