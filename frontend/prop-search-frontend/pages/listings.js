/**
 * Listings component
 * @module pages/listings
 * @requires react
 * @requires antd/lib
 * @requires styles/Listing.module.css
 * @requires components/PlacesMarker
 * @requires @vis.gl/react-google-maps
 * @requires axios
 * @requires debounce
 * @requires components/PropertiesList
 * @requires components/BrandLogo
 * @returns {JSX.Element}
 * @constructor
 * @description This component renders the listings page
 * @author Ameer khan
 * 
 */

import React, {  useState, useEffect } from 'react'; // import the useState hook
import { Row, Col, Spin } from 'antd/lib'; // import the Row and Col components for grid layout
import styles from '../styles/Listing.module.css'; // import the Listing module styles for styling
import PlacesMarker from '@components/PlacesMarker' // import the PlacesMarker component for rendering the markers
import {APIProvider, Map} from '@vis.gl/react-google-maps';  // import the APIProvider and Map components from vis.gl for rendering the map   
import axios from 'axios'; // import axios for making http requests
import debounce  from '@helpers/debounce'; // import the debounce helper for debouncing the getBounds function
import PropertiesList from '@components/PropertiesList'; // import the PropertiesList component for rendering the properties list
import BrandLogo from  '@components/BrandLogo'; // import the BrandLogo component for rendering the brand logo

/**
 * Listings component
 * @returns {JSX.Element}
 * @constructor
 */
function Listings() {

    // state to hold the listings data
    const [listingsData, setlistingsData] = useState([]);

    // state to hold the fetching status
    const [isFetching, setIsFetching] = useState(false);

    /**
     * Fetch properties based on the bound range
     * @param {Object} filter 
     * @returns {Promise}
     */    
    const getProperties = async (filter)=> {
       
        // get the bound range
        const bound = {
            bound : filter?.bound
        };

        // convert the bound range to query string
        const queryString = new URLSearchParams(bound).toString();

        // set isFetching to true
        setIsFetching(true);

        // fetch properties
        const response = await axios.get(`/api/listings?&${queryString}`);

        // set isFetching to false
       
        
        // set the listings data
        if(response.status == 200){
            setlistingsData(response.data);
            setIsFetching(false);
        }
    }

    useEffect(()=>{
        getProperties()
    },[])


    /**
     * Get the bounds of the map
     * @param {Object} event
     * @returns {void}
     * @description This function is debounced to prevent multiple calls
     * to the getProperties function
     * 
     * @example
     * getBounds(event)
     */
    const getBounds = (event)=>{

        // get the bounds of the map
        const bounds = event.map.getBounds();

        // get the northeast and southwest corners
        let ne = bounds.getNorthEast(); // Coords of the northeast corner

        // Coords of the southwest corner
        let sw = bounds.getSouthWest(); // Coords of the southwest corner

        // create a bound range
        const boundRange = [[ne.lat(), ne.lng()],[sw.lat(),sw.lng() ]];
       
        // get properties based on the bound range
        getProperties({ bound: boundRange})
       
    }
    
    return (

        // render the listings component
        <div className='wrapper'>
            
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    
                    {/* Brand logo component */}
                        <BrandLogo/>
                </div>    
            </div>
            <div className='container'>
                <Row>
                    <Col md={24} lg={10} className={styles.mapWrapper}>
                               
                            <Spin className={styles.SpinnerWrapper}  spinning={isFetching}></Spin>
                            <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
                                <Map  onDragend={debounce((event) => { getBounds(event)}, 1000)}
                                        onZoomChanged={debounce((event) => { getBounds(event)}, 1000)}
                                        mapId={"prop-searchId"}
                                        id="prop-search"
                                        style={{width: '100%', height: '100%'}}
                                        defaultCenter={{lat:29.03133, lng: 40.98585}}
                                        defaultZoom={10}
                                        gestureHandling={'greedy'}
                                        disableDefaultUI={true}
                                    >
                                        
                                        <PlacesMarker data={listingsData}/>  
                                    </Map>

                            </APIProvider>
                      
                    </Col>
                    <Col md={24} lg={14}>
                            {/* Properties list component */}
                            <PropertiesList items={listingsData} loading={isFetching}/>
                       
                    </Col>
                </Row>
                
            </div>    
        </div>)
}

export default Listings