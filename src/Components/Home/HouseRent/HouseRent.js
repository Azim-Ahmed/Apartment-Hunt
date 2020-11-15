import React from "react";
import fakedata from "../../../../src/FakeData/Fakedata";

const HouseRent = () => {
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
          {/* {
                  fakedata.length ?  fakedata.map((service, i) =>
                        
                        <>
                             
                           <Link to =  {`/order/${service._id}`} key = {i} className='servicesArea col-md-6 col-sm-12 col-lg-4 text-center'>
                            
                            <img className = 'mb-3 mt-3' style ={{height:"70px"}}  src={`data:image/png;base64,${service.img.img}`}alt="" />
                            <h5>{service.name}</h5>
                     <p className = "text-secondary">{service.desc}</p>
                </Link>
                 </> */}
        </div>
      </div>
    </div>
  );
};

export default HouseRent;
