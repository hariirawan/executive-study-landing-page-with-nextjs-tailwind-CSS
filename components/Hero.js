import React from "react";

export default function Hero(props) {
  return (
    <div className="h-auto  relative  overflow-hidden px-4 ">
      <div className="absolute bottom-0  right-0 text-right transform translate-y-64 translate-x-20 ">
        <img src="/images/Oval.png" alt="oval" />
      </div>
      <div className="container relative mx-auto relateive   py-20  space-y-5 px-0 lg:px-24">
        <h1 className="font-sans font-extrabold text-5xl leading-tight">
          We Help to <b className="text-indigo-600">Build</b> <br />
          Your Dream
        </h1>
        <p className="w-1/2">
          We are always availed to consult on taking your higher education to
          the next level so you can stay competitive in the global world. We
          welcome the opportunity to work with you "today" for "tomorrow's"
          better career solutions.
        </p>

        <button className="bg-indigo-500 rounded-lg py-2 px-8 text-white">
          Apply Online
        </button>
        <div className="flex space-x-5 pt-16">
          <img
            src="/images/facebook.png"
            alt="Facebook"
            className="h-4 w-auto"
          />
          <img src="/images/twitter.png" alt="Twitter" className="h-4 w-auto" />
          <img
            src="/images/instagram.png"
            alt="Instagram"
            className="h-4 w-auto"
          />
          <div className="absolute bottom-0 right-0 xl:right-0  ">
            <img
              src="/images/image.png"
              alt="student"
              className="sm:w-2/6 md:w-2/3  h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
