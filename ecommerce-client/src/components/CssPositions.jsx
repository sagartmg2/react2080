import React from "react";

export default function CssPositions() {
  return (
    <div>
      <p>css positions</p>

      <div className="box static"> static</div>
      <div className="box relative left-3 inline-block bg-red-400">
        {" "}
        relative
      </div>
      <div className=" box inline-block"> static</div>
      <div className="box absolute left-0 top-0 bg-black"> absolute</div>
      <div className="box fixed bottom-0 right-0 top-0 !mb-0 !h-auto bg-orange-500">
        {" "}
        fixed element
      </div>

      <div className="box relati  !h-80 !w-80  ">
        .relative parent
        <div className="box absolute top-0 bg-black  "> absolute chilrend</div>
        <div className="box fixed top-0 bg-red-500  "> absolute chilrend</div>
      </div>
      <div className="box fixed"> fixed</div>
      <div className="box sticky"> sticky</div>
    </div>
  );
}
