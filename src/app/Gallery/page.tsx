import LightBox from "@/components/component/gallery-page";
import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center pt-5 text-2xl">Image Of Christ Gallery</h2>
      <p className="text-center p-10">
        Welcome to our Gallery! Explore moments captured at Christ Recovery
        Centre that reflect our mission in action. From heartfelt community
        engagements to transformative rehabilitation journeys, each image tells
        a story of hope and restoration. Witness the impact of our programs and
        the joy of lives being renewed. Join us on this visual journey of faith,
        compassion, and empowerment.
      </p>
      <LightBox />
    </div>
  );
}

export default page;
