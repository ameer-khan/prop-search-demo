
import {HeartOutlined} from  '@ant-design/icons/lib'; // import the HeartOutlined component from antd icons

/**
 * Favourite component
 * @returns {JSX.Element}
 * @constructor
 */
function Favourite({show}){
    return   show ? <HeartOutlined style={{ fontSize : '22px', color : '#fff'}} /> : null 
}

export default Favourite

// Generate default props for the Favourite component

Favourite.defaultProps = {
    show : true
}