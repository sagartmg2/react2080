import React, { useState } from "react";

export default function GoogleTabs() {
  let tabs = ["All", "Images", "Videos"];
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <div>
      <h1>GoogleTabs ( {selectedTab} ) </h1>
      <ul>
        {tabs.map((element) => {
          return (
            <li
              onClick={() => {
                setSelectedTab(element);
              }}
            >
              {element}
            </li>
          );
        })}
      </ul>

      {selectedTab === "All" && (
        <div>
          <h2>All</h2>
          <p>
            all Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            explicabo vitae suscipit architecto earum doloremque sint laborum
            nemo dolore optio ratione! Corporis qui corrupti inventore adipisci
            soluta quis facilis consequatur!
          </p>
        </div>
      )}
      
      {selectedTab === "Images" && (
        <div>
          <h2>Images</h2>
          <p>
            Images Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse, explicabo vitae suscipit architecto earum doloremque sint
            laborum nemo dolore optio ratione! Corporis qui corrupti inventore
            adipisci soluta quis facilis consequatur!
          </p>
        </div>
      )}
      
      {selectedTab === "Videos" && (
        <div>
          <h2>Videos</h2>
          <p>
            Videos Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse, explicabo vitae suscipit architecto earum doloremque sint
            laborum nemo dolore optio ratione! Corporis qui corrupti inventore
            adipisci soluta quis facilis consequatur!
          </p>
        </div>
      )}
    </div>
  );
}
