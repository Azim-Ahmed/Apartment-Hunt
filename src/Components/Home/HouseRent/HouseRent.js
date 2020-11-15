import React, { useState } from 'react';
import fakedata from '../../../../src/FakeData/Fakedata'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,Row, Col, CardSubtitle, Button, Container
} from 'reactstrap';


const HouseRent = () => {
    // const [rentData , setRentData] = useState([])

    
    return (
        <Container>


<div className=" py-4 text-center text-info">
<p>House Rent</p>
        <h2>Discover The Latest Rent <br/> Available Today</h2>
        
        
</div>

<Row className="my-4">
                {
                    fakedata.map(item =>
                        <Col className="my-3" lg={4} sm={12} md={{ size: 4, order: 1 }}>
                            <Card 
                                 style={{ border: "1px solid #b43838", borderRadius: "8px", boxShadow: "2px 4px 7px gray" }}>
                                <CardImg top width="100%" style={{ height: "260px" }} src={item.imgUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{item.name}</CardTitle>
                                    
                                    <CardText>{item.description}</CardText>

                                    <Button outline block color="danger" className=""><a style={{ textDecoration: "none" }} href={item.live}>Live Site</a></Button>
                                    <Button outline block color="success" className=""><a style={{ textDecoration: "none" }} href={item.github}>Repository</a></Button>

                                </CardBody>
                            </Card>
                        </Col>

                    )
                }
            </Row>



                 
               

        </Container>
    );
};

export default HouseRent;