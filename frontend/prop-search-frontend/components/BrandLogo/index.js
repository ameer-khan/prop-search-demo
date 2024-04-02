

import { Row, Col } from 'antd/lib'; // import the Row, Col and Image components from antd
import Image from 'next/image'; // import the Image component from next

/**
 * BrandLogo component
 * @returns {JSX.Element}
 * @constructor
 */

function BrandLogo(){
    return  <Row>
                        
                <Col xs={24}><Image src="/maxhome.svg" alt="Maxhome Logo" width={100} height={20} /></Col>

            </Row>
}

export default BrandLogo;