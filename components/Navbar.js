import React from "react";

const Avatar = () => {
  return <img src="/images/Bitmap.png" alt="Bitmap" className="w-auto" />;
};

const NavItem = (props) => {
  return (
    <li className={`p-1 cursor-pointer text-gray-600 ${props.className}`}>
      {props.label}
    </li>
  );
};

export default function Navbar(props) {
  return (
    <nav>
      <div className="container mx-auto px-0 lg:px-24">
        <div className="flex justify-between pt-10">
          <Avatar />
          <ul className="flex flex-grow justify-end space-x-10 items-center">
            <NavItem
              label="Home"
              className=" border-b-2 border-transparent hover:border-indigo-500"
            />
            <NavItem
              label="About"
              className=" border-b-2 border-transparent hover:border-indigo-500"
            />
            <NavItem
              label="Our Services"
              className=" border-b-2 border-transparent hover:border-indigo-500"
            />
            <NavItem
              label="Responsibilitas"
              className=" border-b-2 border-transparent hover:border-indigo-500"
            />
            <NavItem
              label="Country"
              className=" border-b-2 border-transparent hover:border-indigo-500"
            />
            <NavItem
              label="Apply"
              className="border border-indigo-500 rounded-lg px-5 py-1"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
