
import { Image } from 'antd/lib';

/**
 * Thumbnail component
 * @param {Object} props - The props of the component
 * @param {String} props.image - The image of the thumbnail
 * @returns {JSX.Element} - The JSX element of the component
 * @exports Thumbnail
 * 
 */
function Thumbnail({ image }){
    
    return (
        <div style={{maxHeight : '170px', width: '100%', overflow : 'hidden'}}>
        <Image
            width={'100%'}
            height={'auto'}
            src={image}
            fallback="https://a0.muscache.com/im/pictures/af5c069c-ef73-490a-9e47-b48c0ae47c2f.jpg?aki_policy=large"
        /> </div>
    )
}

export default Thumbnail;