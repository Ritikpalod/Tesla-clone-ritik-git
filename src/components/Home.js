import React from "react";
import './Home.css'

import Section from "./Section";
function Home() {
  return (
    <div className="containers">  
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        BackgroungImage="model-s.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Onlince for Touchless Delivery"
        BackgroungImage="model-y.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Onlince for Touchless Delivery"
        BackgroungImage="Model3.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Onlince for Touchless Delivery"
        BackgroungImage="model-x.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        BackgroungImage="solar-panel.jpg"
        LeftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        BackgroungImage="solar-roof.jpg"
        LeftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Powerwall"
        BackgroungImage="powerwall.jpg"
        LeftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        BackgroungImage="accessories.jpg"
        LeftBtnText="Shop Now"
      />
    </div>
  );
}

export default Home;

