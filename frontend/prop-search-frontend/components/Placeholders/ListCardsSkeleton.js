import {Row, Col} from 'antd/lib'
import ListCardPlaceholder from '../ListCard/ListCardPlaceholder' // Import ListCardPlaceholder component

/**
 * ListCardsSkeleton component
 * @description This component is a placeholder for the ListCard component
 * @returns {JSX.Element} - The JSX element of the component
 * @exports ListCardsSkeleton
 * 
 */

function ListCardsSkeleton(){


    // Create an array of 8 elements
    const data = Array(8);
    return  <Row gutter={[10, 20]}>
                
                <Col sm={24}  md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col sm={24}  md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col sm={24}  md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col sm={24} md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col sm={24}  md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col sm={24}  md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col  sm={24} md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                <Col sm={24} md={12} lg={8}>
                    <ListCardPlaceholder/>
                </Col>
                
            </Row>
}

export default ListCardsSkeleton

