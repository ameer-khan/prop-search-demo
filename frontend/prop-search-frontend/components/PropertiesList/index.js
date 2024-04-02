
import { Row, Col, Empty } from 'antd/lib';
import ListCard from '../ListCard';
import ListCardsSkeleton from '../Placeholders/ListCardsSkeleton';

/**
 * PropertiesList component
 * @param {Object} props - The props of the component
 * @param {Array} props.items - The items to display
 * @param {Boolean} props.loading - The loading state of the component
 * @returns {JSX.Element} - The JSX element of the component
 * @exports PropertiesList
 * 
 */
function PropertiesList({items, loading}){
   

   
    return  (
        <div style={{padding: '20px'}}>

        {!loading ? 

             <Row gutter={[25, 20]}>

                    { items.length === 0 ?  <Col align="middle" xs={24}><Empty description='No properties found'/></Col> :
                        items.map((property, i)=> {
                            return  <Col key={property._id} sm={24} md={12} lg={8}>
                                        <ListCard data={property}/>
                                    </Col>
                        }) 
                 }
        
        </Row> : <ListCardsSkeleton/> }
   

</div>)
}

export default PropertiesList;