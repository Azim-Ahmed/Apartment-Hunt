import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Form, FormGroup, Input, Button } from "reactstrap";

import NavSection from "../../Home/Header/Navbar/NavSection";
import BannerDetails from "./BannerDetails";

const DetailsHeader = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/admin");
  };
  return (
    <section>
      <NavSection></NavSection>
      <BannerDetails></BannerDetails>

      <Container>
        <Row className="mt-5">
          <Col md={8} lg={8} sm={12}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/n08KNt9/Rectangle-410.png"
              alt=""
            />

            <Row className="mt-3">
              <Col md={4} lg={4} sm={12}>
                <img
                  style={{ width: "100%" }}
                  src="https://i.ibb.co/sjMv1f1/Rectangle-403.png"
                  alt=""
                />
              </Col>
              <Col md={4} lg={4} sm={12}>
                <img
                  style={{ width: "100%" }}
                  src="https://i.ibb.co/WnzxG5X/Rectangle-408.png"
                  alt=""
                />
              </Col>
              <Col md={4} lg={4} sm={12}>
                <img
                  style={{ width: "100%" }}
                  src="https://i.ibb.co/NKP6Sp7/Rectangle-398.png"
                  alt=""
                />
              </Col>
            </Row>

            <div className="mt-4 pt-3">
            <div className="d-flex justify-content-between">
              <h3>Family Apartment Three</h3>
              <h3>$236</h3>
            </div>
            <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne</p>
            </div>

            <div>
              <h5>
              Price Details-
              </h5>
              <ul className="list-unstyled">
                <li>Rent/Month: $550 (negotiable)
</li>
                <li>Service Charge : 8,000/= Tk per month, subject to change</li>
                <li>Security Deposit : 3 month’s rent</li>
                <li>Flat Release Policy : 3 months earlier notice required</li>
              </ul>
            </div>
            <div>
              <h5>
              Property Details-
              </h5>
              <ul className="list-unstyled">
                <li>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
</li>
                <li>Flat Size : 3000 Sq Feet.</li>
                <li>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</li>
                <li>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</li>

                <li>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</li>
                <li>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with camera</li>
              </ul>
            </div>

            

          </Col>

          <Col md={4} lg={4} sm={12}>
            <div
              className="p-4"
              style={{ background: "#F4F4F4", borderRadius: "10px" }}
            >
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
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  block
                  outline
                  type="submit"
                  color="success"
                >
                  Request Booking
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailsHeader;
