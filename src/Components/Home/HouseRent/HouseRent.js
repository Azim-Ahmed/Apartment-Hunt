<<<<<<< HEAD
import React, { useState } from "react";
import fakedata from "../../../../src/FakeData/Fakedata";

const HouseRent = () => {
  const [rentData, setRentData] = useState([]);

  return (
    <div>
      <div className="text-center text-info">
        <p>House Rent</p>
        <h2>
          Discover The Latest Rent <br /> Available Today
        </h2>
        <h2>
          Discover The Latest Rent <br /> Available Today
        </h2>
      </div>
      {/* <div>
    {fakedata.map(item=> <li>{item.title}</li> )}
</div> */}

      <div className="d-flex  justify-content-center">
        <div className="row w-75 mt-5 pt-5 ">
          {fakedata.map((item, i) => (
            <a
              href={`/order/${item.id}`}
              key={i}
              className="servicesArea col-md-6 col-sm-12 col-lg-4 text-center"
            >
              <img
                className="mb-3 mt-3"
                style={{ height: "70px" }}
                src={item.imgUrl}
                alt=""
              />
              <h5>{item.title}</h5>
              <p className="text-secondary">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
=======
import React, { useState } from 'react';
import fakedata from '../../../../src/FakeData/Fakedata'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, Container
} from 'reactstrap';
import { Link } from 'react-router-dom';


const HouseRent = () => {
    // const [rentData , setRentData] = useState([])


    return (
        <Container>


            <div className=" py-4 text-center text-info">
                <p style={{ color: "#16322E" }}>House Rent</p>
                <h2 style={{ color: "#16322E" }}>Discover The Latest Rent <br /> Available Today</h2>


            </div>

            <Row className="my-4">
                {
                    fakedata.map(item =>
                        <Col className="my-3" lg={4} sm={12} md={{ size: 4, order: 1 }}>

                            <Card
                                style={{ borderRadius: "8px", }}>
                                <CardImg top width="100%" style={{ height: "260px" }} src={item.imgUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><h5 style={{ color: "#16322E" }}>{item.title}</h5></CardTitle>

                                    <CardText>
                                        <div>
                                            <i className="fa fa-map" style={{ fontSize: "15px", color: "gray" }}></i>Nasirabad H/S , Chattogram
                                   </div>
                                        <div className="mt-2 d-flex justify-content-between">
                                            <i className=" fa fa-map" style={{ fontSize: "15px", color: "gray" }}>3 bedrooms</i>
                                            <i className=" mr-3 fa fa-map" style={{ fontSize: "15px", color: "gray" }}>      2 Bathrooms</i>
                                        </div>
                                    </CardText>
                                    <div className="d-flex justify-content-between">
                                        <h3>${item.price}</h3>

                                        <Link to={`/housedetails/${item.id}`} style={{ textDecoration: "none" }}>
                                            <button className="text-white searchButton"><a style={{ textDecoration: "none" }} href={item.github}>View Detailes</a></button>
                                        </Link>
                                    </div>

                                </CardBody>
                            </Card>

                        </Col>

                    )
                }
            </Row>






        </Container>
    );
>>>>>>> origin/azim
};

export default HouseRent;
