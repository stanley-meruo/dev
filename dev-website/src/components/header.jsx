import React from "react";
import logo from "/WESTON.svg"
import menu from "/menu.svg"
import close from "/close.svg"


const Header = () => {
    
    
    return (
      <>
        <nav className="flex items-center justify-between p-6">
          <div className="w-20">
            <img src={logo} />
          </div>
          <div>
            <div className="hidden lg:block">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Properties</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </div>
            <div>
              <img src={menu} className="w-5" onClick={'openNav'}/>
            </div>
          </div>
        </nav>
      </>
    );
}
export default Header;