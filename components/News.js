import React from "react";

export default function News(props) {
  return (
    <div>
      <div className="container mx-auto lg:px-24 py-24 space-y-12">
        <div className="flex justify-center">
          <div className="w-2/3 space-y-6">
            <div className="text-center text-2xl font-semibold">News</div>
            <div className="text-center ">
              Executive Trade International is an University Application Centre,
              guiding Bangladeshi students to Australian, British, Canadian and
              Irish universities!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
