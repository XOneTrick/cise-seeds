import React from "react";
import hcbgImage from "./books-1655783.jpg";
function Home() {
  return (
    <div 
        class="bg_img"
        style={{
            backgroundImage: 'url('+hcbgImage+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
        }}
    >
    <h1 className="welcome-header-home">Welcome to SEED</h1>
    <p className="purpose-p"><b className="purpose-bold">Purpose: </b>The purpose of this website it to allow for practitionars to look up articles from
    our database. First off you should vist the "Getting Started" page. This will walk you through
    how to use our services. If you are still stuck please vist our "FAQ & Help" page.
    </p>
    </div>
  );
}

export default Home;