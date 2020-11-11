import React from "react";

const date = new Date();
const year = date.getFullYear()


// Footer Function

function Footer() {
  return (
    <div>
      <footer>
        <p>
            Copyright © {year}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
