

// import React from "react";
// import homeLogo from "../images/home-main.svg";
// import { Text } from "@chakra-ui/react";
// import Type from "./type";
// import { Button } from "@chakra-ui/react";
// const Shubham_Verma_Resume = require("../Components/Shubham_Verma_Resume.pdf");

// const Home = () => {
//   const onButtonClick = () => {
//     const link = document.createElement("a");
//     link.href = Shubham_Verma_Resume;
//     link.download = "Shubham_Verma_Resume.pdf";
//     link.click();
//   };

//   return (
//     <div id="home">
//       <div style={{ height: "500px", display: "flex", justifyContent: "space-around" }}>
//         <div>
//           <h1 style={{ paddingBottom: 15 }} className="heading">
//             Hi There!{"  "}
//             <span className="wave" role="img" aria-labelledby="wave">
//               👋🏻
//             </span>
//           </h1>
//           <h1 className="heading-name">
//             My Name is <strong className="main-name">ARPIT KUMAR</strong>
//           </h1>
//           <div className="main-name" style={{ padding: 50, textAlign: "center", fontSize: "2.4em" }}>
//             <Type />
//           </div>
//           <Text className="heading-name">
//             Download <strong className="main-name">Resume:-</strong>
//           </Text>
//           <Button
//             backgroundColor="#a891b7"
//             _hover={{ bg: "#a891b7", color: "black" }}
//             color="white"
//             variant="solid"
//             onClick={onButtonClick}
//             size={["sm", "md"]}
//             id="resume-button-2"
//           >
//             RESUME
//           </Button>
//         </div>
//         <div className="home-imgee">
//           <img src={homeLogo} alt="home pic" className="home-imgee" style={{ maxHeight: "450px" }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React from "react";
import homeLogo from "../images/home-main.svg";
import { Text } from "@chakra-ui/react";
import Type from "./type";
import { Button } from "@chakra-ui/react";

const Arpit_Kumar_Resume = require("../Components/Arpit_Kumar_Resume.pdf");

const Home = () => {
  const onButtonClick = () => {
    // Open in new tab or window
    window.open(Arpit_Kumar_Resume, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = Arpit_Kumar_Resume;
    link.download = "Arpit_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <div id="home">
      <div style={{  display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{"  "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            My Name is <strong className="main-name">ARPIT KUMAR</strong>
          </h1>
          <div className="main-name" style={{ padding: 50, textAlign: "center", fontSize: "2.4em" }}>
            <Type />
          </div>
          <Text className="heading-name">
            Download <strong className="main-name">Resume:-</strong>
          </Text>
          <Button
            backgroundColor="#a891b7"
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            onClick={onButtonClick}
            size={["sm", "md"]}
            id="resume-button-2"
          >
            RESUME
          </Button>
        </div>
        <div className="home-imgee">
          <img src={homeLogo} alt="home pic" className="home-imgee" style={{ maxHeight: "450px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;