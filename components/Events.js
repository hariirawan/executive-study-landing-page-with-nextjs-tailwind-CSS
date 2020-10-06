import React from "react";
import Slider from "react-slick";

export default function Events(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="container mx-auto lg:px-40 space-x-5 space-y-10">
        <div className="flex justify-center">
          <div className="w-2/3 space-y-6">
            <div className="text-center text-2xl font-semibold">
              Upcoming University Events
            </div>
            <div className="text-center ">
              Sunt autem nusquam hoc epicurus in gravissimo bello
              animadversionis metu degendae praesidia firmissima. Torquatos
              nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse
              vult.
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="w-1/3   px-3  mb-8">
            <CardEvent />
          </div>
          <div className="w-1/3   px-3  mb-8">
            <CardEvent />
          </div>
          <div className="w-1/3   px-3  mb-8">
            <CardEvent />
          </div>
        </Slider>
      </div>
    </div>
  );
}

const CardEvent = () => {
  return (
    <div className=" bg-white rounded-lg p-5 space-y-5 ">
      <div className="flex space-x-3 ">
        <div className="w-16  h-16 rounded-lg bg-indigo-100 flex flex-col justify-center items-center">
          <h1 className="text-indigo-600 font-bold text-2xl leading-5">23</h1>
          <h1 className="text-indigo-600 font-light">Dec</h1>
        </div>
        <div className="font-bold text-xl">
          Macquarie University, Sydney,
          <br /> Australia
        </div>
      </div>
      <div>
        Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut.
        Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero
        ex possimus
      </div>
      <div className="flex justify-between">
        <p className="text-indigo-600 font-medium text-sm">Learn More</p>
        <p className="text-sm">10:00 AM - 2:00 PM</p>
      </div>
    </div>
  );
};
