import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import NavSection from '../../Home/Header/Navbar/NavSection';
import BannerDetails from './BannerDetails';

const DetailsHeader = () => {
    return (
        <section>
            <NavSection></NavSection>
          <BannerDetails></BannerDetails>  

<Container>
<Row className="mt-5">
<Col md={8} lg={8} sm={12}>
    <img style={{width: '100%'}} src="https://i.ibb.co/n08KNt9/Rectangle-410.png" alt=""/>


<Row className="mt-3">
    <Col md={4} lg={4} sm={12}>
    <img style={{width: '100%'}} src="https://i.ibb.co/n08KNt9/Rectangle-410.png" alt=""/>
    </Col><Col md={4} lg={4} sm={12}>
    <img style={{width: '100%'}} src="https://i.ibb.co/n08KNt9/Rectangle-410.png" alt=""/>
    </Col>
    <Col md={4} lg={4} sm={12}>
    <img style={{width: '100%'}} src="https://i.ibb.co/n08KNt9/Rectangle-410.png" alt=""/>
    </Col>

</Row>

</Col>







<Col md={4} lg={4} sm={12}>
<div className="p-4" style={{ background: "#F4F4F4", borderRadius: "10px" }}>
                <Form>

                  <FormGroup>

                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                    />
                  </FormGroup>
                  <FormGroup>

                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="Phone No."
                    />
                  </FormGroup>
                  <FormGroup>

                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                    />
                  </FormGroup>
                  <FormGroup>

                    <Input
                      type="text"
                      required
                      name="message"
                      style={{ height: "8rem" }}
                      className="input-element"
                      placeholder="Message"
                    />
                  </FormGroup>
                  <Button size='lg' block outline type="submit" color="success">Request Booking</Button>
                </Form>
              </div>
</Col>
</Row>
</Container>

        </section>
    );
};

export default DetailsHeader;