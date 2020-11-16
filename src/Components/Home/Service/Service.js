import React from 'react';
import {
    Col, Container, Row, Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import apartment from '../../../Assets/logos/apartment 1.png'
import affordable from '../../../Assets/logos/affordable 1.png'
import lesse from '../../../Assets/logos/lessee 1.png'

const Service = () => {

    const serviceData = [
        {
            title: 'Wide Range of Properties',
            photo: apartment,
            desc: 'With a robust selection of popular properties on hand, as well as leading properties from experts.'
        },
        {
            title: 'Financing Made Easy',
            photo: affordable,
            desc: 'Our stress-free finance department that can find financial solutions to save you money.'
        },
        {
            title: 'Trusted by Thousands',
            photo: lesse,
            desc: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.'
        },
    ]

    return (
        <Container className="mt-5 mb-4">
            <div className="text-center mb-5">
                <p style={{color: "#16322E"}}>service</p>
                <h2 style={{color: "#16322E"}}>We are an agency tailored to all <br />
            Clients' needs that always delivers
             </h2>
            </div>
            <Row>
                {
                    serviceData.map(item =>
                        <Col md={4} lg={4} SM={12} >

                            <Card
                                style={{ borderRadius: "8px", border: "none" }}>
                                <CardImg top className="ml-5" style={{ height: "20%", width: "20%" }} src={item.photo} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><h5>{item.title}</h5></CardTitle>
                                    <CardText>
                                        {item.desc}
                                    </CardText>
                                </CardBody>
                            </Card>

                        </Col>



                    )
                }
            </Row>


        </Container>
    );
};

export default Service;