import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          {/*item 1*/}
          <Carousel interval={2000} >
            <Carousel.Item>
              <img
                className="card-img img-fluid"
                src="https://content.wepik.com/statics/38164489/preview-page1.jpg"
                alt="Card"
                height={500}
              />
            </Carousel.Item>
            {/*item 2*/}
            <Carousel.Item>
              <img
                className="card-img img-fluid"
                src="https://cdn.grabon.in/gograbon/images/merchant/1664278009533.jpg"
                alt="Card"
                height={500}
              />
            </Carousel.Item>
            {/*item 3*/}
            <Carousel.Item>
              <img
                className="card-img img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMw3dSMrE8i31T0jGUyj2oTD8W4nyjxIH-aY-Pkk4UhuL7GJ8FxI2EY_O1Tu0nXLMlNI&usqp=CAU"
                alt="Card"
                height={500}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="card-img img-fluid"
                src="https://m.economictimes.com/thumb/msid-99962676,width-1200,height-900,resizemode-4,imgsize-38666/amazon-great-summer-sale-2023-min-50-off-on-popular-brands-in-fashion-beauty.jpg"
                alt="Card"
                height={500}
              />  
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;