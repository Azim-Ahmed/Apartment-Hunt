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
};

export default HouseRent;
