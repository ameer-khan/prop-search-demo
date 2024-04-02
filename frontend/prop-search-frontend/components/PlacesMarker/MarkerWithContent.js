

import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState } from "react"; // import the useState hook from react
import styles from './PlacesMarker.module.css' // import the PlacesMarker module css
import { Typography } from "antd/lib"; // import the Typography component from antd
import ListCard from "@components/ListCard"; // import the ListCard component
import cx from 'classnames'; // import the classnames library
import Price from "@components/Price/Price";    // import the Price component

// Destructure the Text component from Typography
const {Text} = Typography

/**
 * MarkerWithContent component
 * @param {Object} props - The props of the component
 * @param {Object} props.data - The data of the marker
 * @param {Object} props.position - The position of the marker
 * @returns {JSX.Element} - The JSX element of the component
 * @exports MarkerWithContent
 * 
 */
function MarkerWithContent(props) {

    // state to hold the infowindow open status
    const [infowindowOpen, setInfowindowOpen] = useState(false);

    // use the advanced marker ref hook to get the marker ref and marker instance 
    const [markerRef, marker] = useAdvancedMarkerRef();

    // get the classnames for the marker and text
    const wrapperClassName = cx(styles.propertyMarker,{
        [styles.propertyMarkerActive] : infowindowOpen
    })


    const wrapperTextClassName = cx('',{
        [styles.propertyMarkerTextActive] : infowindowOpen
    })
    return <>
        <AdvancedMarker
            ref={markerRef}
            onClick={() => setInfowindowOpen(true)}
            position={props.position}
            title={props.data.name}>

            <div className={wrapperClassName}>
                <Text className={wrapperTextClassName} level={5}>
                    <Price data={props.data}/>
                </Text>
            </div>
          </AdvancedMarker>

          
        {infowindowOpen && (
            <InfoWindow
            anchor={marker}
            shouldFocus={false}
            onCloseClick={() => setInfowindowOpen(false)}>
                <div className={styles.InfoWindowCard}>
                   
                    <ListCard  data={props.data}/>
                </div>
            </InfoWindow>
        )}
    </>
}

export default MarkerWithContent