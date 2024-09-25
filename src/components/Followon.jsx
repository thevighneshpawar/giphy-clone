import React from 'react'
import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

function Followon() {
  return (
    <div
    className="faded-text pt-2" //custom - faded-text
  >
    <span>Follow on:</span>
    <div className="flex gap-4 pt-3">
      <a href="https://www.youtube.com/">
        <FaYoutube size={20} />
      </a>
      <a href="https://www.instagram.com/vighnesh._.0204">
        <FaInstagram size={20} />
      </a>
      <a href="https://www.twitter.com/">
        <FaXTwitter size={20} />
      </a>
    </div>
  </div>
  )
}

export default Followon