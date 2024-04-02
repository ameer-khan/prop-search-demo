

// Import proptypes

import PropTypes from 'prop-types';

/**
 * Price component to display the price of the property
 * @param {Object} props - The props of the component
 * @param {Object} props.data - The data of the price
 * @param {Object} props.data.monthly_price - The monthly price of the property
 * @param {Object} props.data.price - The price of the property
 * @returns {String} - The price of the property
 * @exports Price
 */
function Price(props){

    // Destructure the data from the props
    const monthly_price = props.data?.monthly_price;
    const price = props.data?.price;

    // Check if the monthly price is available, if not, use the price
    const finalPrice = monthly_price?.$numberDecimal ? monthly_price?.$numberDecimal : price?.$numberDecimal
    
    // Return the price in the format $ 1000
    return `$ ${parseInt(finalPrice)}`
}

export default Price

// Define the prop types
Price.defaultProps = {
    data: {
        monthly_price: {
            $numberDecimal: 0
        },
        price: {
            $numberDecimal: 0
        }
    }
}