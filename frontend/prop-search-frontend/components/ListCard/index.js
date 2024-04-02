

import { Card, Typography, Space, Row, Col, Image } from 'antd/lib';
import Favourite from '../Favourite'; // Import Favourite component
import Price from '../Price/Price'; // Import Price component
import styles from './ListCard.module.css' // Import css module
import Thumbnail from '../PropertyImage/Thumbnail';


//  Destructure the components from antd
const {Title, Text} = Typography

// Destructure the Meta component from Card
const { Meta } = Card;


/**
 * ListCard component
 * @param {Object} props - The props of the component
 * @param {Object} props.data - The data of the card
 * @param {String} props.data.name - The name of the card
 * @param {Object} props.data.images - The images of the card
 * @param {String} props.data.summary - The summary of the card
 * @param {Number} props.data.bedrooms - The number of bedrooms of the card
 * @param {Number} props.data.price - The price of the card
 * @param {Number} props.data.monthly_price - The monthly price of the card
 * @returns {JSX.Element} - The JSX element of the component
 * @exports ListCard
 * 
    */
function ListCard(props){

    // Destructure the data from the props
    const { name, images, summary, bedrooms, price, monthly_price } = props.data;


    return <Card hoverable bordered={false} className={styles.ListCard} cover={ <Thumbnail image={images?.picture_url} />}>
                 
                 <div className={styles.CardBody}>
                        <Meta
                            className={styles.CardMeta}
                            title={<Title ellipsis style={{margin: 0}} level={5}>{name}</Title>}
                            description={<Text ellipsis>{summary}</Text>}
                            style={{margin: 0}}
                        /> 
                        <Row>
                            <Col xs={24}><Text type='secondary'>{bedrooms} Bedrooms</Text></Col>

                            <Col xs={24}><Space size={0}>
                                <Title style={{marginTop: '5px'}} level={5}>
                                    <Price data={props.data}/>
                                </Title>
                                <Text>&nbsp;month</Text></Space>
                            </Col>
                        </Row>
             
                
                        <div className={styles.FavouriteWrapper}>
                            <Favourite/>
                        </div>
                 </div>
            
            </Card>
}

export default ListCard