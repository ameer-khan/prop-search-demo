import MarkerWithContent from "./MarkerWithContent";

/**
 * PlacesMarker component
 * @param {Object} props - The props of the component
 * @param {Array} props.data - The data of the places
 * @returns {JSX.Element} - The JSX element of the component
 * @exports PlacesMarker
 * 
 */
function PlacesMarker(props){
   
    return props.data?.map((place)=>{

            // get the coordinates of the place
            let coordinates = place?.address?.location?.coordinates;
           
            // return the marker with content
            return <MarkerWithContent data={place} name={place.name} position={{lat : coordinates[0], lng: coordinates[1]}}></MarkerWithContent>
    })

}

export default PlacesMarker