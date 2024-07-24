import React from "react";
import Facebook from "/facebook.svg";
import Instagram from "/instagram.svg";
import LinkIned from "/linkIned.svg";
import Twitter from "/twitter.svg";


const SocialMedia = () => {

    return (
      <>
        <div className="grid gap-4 text-sm">
          <p className="text-center">FOLLOW US</p>
          <div className="flex items-center gap-4">
            <img src={Facebook} className="w-5" />
            <img src={Instagram} className="w-5" />
            <img src={LinkIned} className="w-5" />
            <img src={Twitter} className="w-5" />
          </div>
        </div>
      </>
    );
}
 export default SocialMedia;
