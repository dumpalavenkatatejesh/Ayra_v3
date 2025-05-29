import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <>
      <div>
        <div className="flex justify-center pt-10 px-0">
          <div className=" w-full">
            <iframe
              className="w-full h-[400px] rounded-b-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.998156002647!2d77.60210301170989!3d12.971969487290625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f7d8ccc4207%3A0xbd78d1bf607434a!2siVistaz%20Ecom%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718256858925!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
