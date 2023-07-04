import React from "react";
// import homeLogo from "../images/myimage.png";
import homeLogo from "../images/myimage.png";
import { Text, Button, Box } from "@chakra-ui/react";

const About = () => {
  // const onButtonClick = () => {
  //   const link = document.createElement("a");
  //   link.href = "https://drive.google.com/your-file-link"; // Replace "your-file-link" with the actual Google Drive link
  //   link.download = "Kamalakanta_Mahapatra.pdf";
  //   link.click();
  // };

  return (
    <div id="about" className="about section">
      <h1 style={{ fontSize: "40px", color: "#cd5ff8", margin: "auto", marginLeft: "-35%" }}>About</h1>
      <Box
        id="about-inner"
        display={{ base: "grid", md: "flex" }}
        justifyContent={{ base: "center", md: "space-around" }}
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap="10px"
      >
        <div style={{ width: "50%" }}>
          <h4
            id="user-detail-intro"
            style={{ fontSize: "25px", marginLeft: "30px", marginRight: "30px" }}
          >
            Hello, I'm <span style={{ color: "#cd5ff8" }}>Kamalakanta Mahapatra</span>, a determined and versatile Full Stack MERN developer.
            <br /> With a passion for web development and a solid foundation in{" "}
            <span style={{ color: "#cd5ff8" }}>MongoDB, Express.js, React.js, Node.js and JavaScript</span> and <span style={{ color: "#cd5ff8" }}> Java </span>, I'm committed to creating impactful and user-centric applications.
            <br /> I thrive on continuous learning, embracing challenges, and collaborating with like-minded professionals to build innovative solutions.
            <br /> Let's connect and explore the possibilities together.
          </h4>
        </div>
        <div className="home-imgee" style={{display:"flex",justifyContent:"center",alignItems :"center"}}>
          <img src={homeLogo} alt="home pic" className="home-img" style={{ maxHeight: "100%", marginTop: "-40%" }} />
        </div>
      </Box>
      <div style={{ marginTop: "10%", marginBottom: "5%", textAlign: "center", marginLeft: "-3%" }}>
        {/* <div className="heading-name">
          <Text>
            Download <strong className="main-name">Resume:</strong>
          </Text>
          <Button
            backgroundColor="#a891b7"
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            // onClick={onButtonClick}
            size={["sm", "md"]}
            id="resume-button-2"
          >
            RESUME
          </Button>
        </div> */}
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            #about-inner {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;