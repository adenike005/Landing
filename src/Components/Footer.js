import React from "react";
import "./Footer.css";
// import logostreamease from "../images/logostreamease.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer">
      <div className="footer_item">
        <div className="item">
            <p>FAQ <div className="line"></div></p>
            <p><Link>Media Center</Link></p>
            <p><Link>Ways to Watch</Link></p>
            <p><Link>Cookies preferences</Link></p>
        </div>
        <div className="item">
           <p> Help Center <div className="line"></div></p>
            
            <p><Link>Investors Relations</Link></p>
            <p><Link>Terms of use</Link></p>
             <p><Link>Corporate</Link></p>
        </div>
        <div className="item">
           <p>Account <div className="line"></div></p>
            <p><Link>Privacy</Link></p>
            <p><Link>Contact us</Link></p>
            <p><Link>Only on Streamease</Link></p>
        </div>
      </div>
    </div>
 

  );
}
