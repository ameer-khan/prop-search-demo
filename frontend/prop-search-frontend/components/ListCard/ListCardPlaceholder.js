


import { Card, Typography, Space, Row, Col, Skeleton } from 'antd/lib'; // Import the Card, Typography, Space, Row, Col, and Skeleton components from antd
import Favourite from '../Favourite'; // Import the Favourite component

// Import the css module
import styles from './ListCard.module.css'

// Destructure the Meta component from Card
const { Meta } = Card;

// Destructure the components from antd Typography
const {Title, Text} = Typography

/**
 * ListCardPlaceholder component
 * @returns {JSX.Element} - The JSX element of the component
 * @exports ListCardPlaceholder
 * @description This component is a placeholder for the ListCard component
 *  
 * */
function ListCardPlaceholder(props){
    console.log("ListCardPlaceholder")
    return <Card bordered={false} loading={true} className={styles.ListCard}
               
            cover={ <div style={{maxHeight : '200px', width: '100%', overflow : 'hidden'}}>
                 
                 <Skeleton.Image active={true} /> </div> }>

                 <div className={styles.CardBody}>
                <Meta
                    className={styles.CardMeta}
                    title={<Title ellipsis style={{margin: 0}} level={5}>Lorem</Title>}
                    description={<Text ellipsis>Lorem</Text>}
                    style={{margin: 0}}
                /> 
                <Row>
                    <Col xs={24}><Text type='secondary'>Bedrooms</Text></Col>
                    <Col xs={24}><Space size={0}><Title style={{marginTop: '5px'}} level={5}></Title><Text>&nbsp;month</Text></Space></Col>
                </Row>
             
                
                <div className={styles.FavouriteWrapper}>
                    <Favourite/>
                </div>
            </div>
            
            </Card>
}

export default ListCardPlaceholder