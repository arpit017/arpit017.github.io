import React from "react";
import {Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button} from "@chakra-ui/react"
import autoparts from "../images/autoparts.png"
import bluemercury from "../images/bluemercury.png"

import GitHubCalendar from 'react-github-calendar';
// import 'react-github-calendar/dist/github-calendar.css' from 'react-github-calendar';

const Projects = () => {
  return (
    <div id="projects" style={{}}>



<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    // maxW={{ base: '100%', sm: '200px' }}
    src={autoparts}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading class="project-title" size='md'>AutoParts.Com</Heading>

      <Text className="project-description" py='2'>
       This a commercial Website which sells autoparts of vehicles mainly of bike and cars.
      </Text>
      <Text className="project-tech-stack" py='2'>
       This is a team project of 2 people. We have used React and ChakraUI to make this project.
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue'>
       <a href="https://github.com/arpit017/Autoparts-Project">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
       <a href="https://autoparts-lake.vercel.app/">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    // maxW={{ base: '100%', sm: '200px' }}
    src={bluemercury}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading class="project-title" size='md'>Bluemercury.Com</Heading>

      <Text className="project-description" py='2'>
      This an American commercial Website which sells beauty products and cosmetics.
      </Text>
      <Text className="project-tech-stack" py='2'>
       This is a team project of 5 people. We have used HTML , Javascript and CSS to make this project.
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue'>
       <a href="https://github.com/RahulDobariya/Project_pw11_bluemercury">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
       <a href="https://bluemercury-clone123.netlify.app/">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="project-card"
  w="80%"
  m="auto"
  mb="10px"
>
  <Image
    objectFit='cover'
    // maxW={{ base: '100%', sm: '200px' }}
    src={bluemercury}
    alt='Caffe Latte'
    w="500px"
  />

  <Stack>
    <CardBody>
      <Heading class="project-title" size='md'>AutoParts.Com</Heading>

      <Text className="project-description" py='2'>
       This a commercial Website which sells autoparts of vehicles mainly of bike and cars.
      </Text>
      <Text className="project-tech-stack" py='2'>
       This is a team project of 2 people. We have used React and ChakraUI to make this project.
      </Text>
    </CardBody>

    <CardFooter>
      <Button className="project-github-link" variant='solid' colorScheme='blue'>
       <a href="https://github.com/arpit017/Autoparts-Project">Github</a>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button className="project-deployed-link" variant='solid' colorScheme='blue'>
       <a href="https://bluemercury-clone123.netlify.app/">Deployed link</a>
      </Button>
    </CardFooter>
  </Stack>
</Card>





&nbsp;&nbsp;&nbsp;
     <p align="center">
    <a  href="https://github.com/arpit017/github-readme-streak-stats">
        <img  id="github-streak-stats" title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="deepshikha's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=arpit017&theme=radical&hide_border=true&stroke=0000&background=#122722"/>
    </a>
</p>
&nbsp;&nbsp;&nbsp;
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  <div>
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=arpit017&theme=2077" />
  </div>
  <div  style={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin: '20px' }}>
    <img id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs?username=arpit017&theme=2077' />
    <img  src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=arpit017&theme=2077" />
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin: '20px' }}>
    <img id="github-stats-card"  src='https://github-readme-stats.vercel.app/api?username=arpit017&theme=2077' />
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=arpit017&theme=2077&utcOffset=8" />
  </div>
</div>
&nbsp;&nbsp;&nbsp;
<div className="react-activity-calendar" >
      {/* Your other portfolio content */}
      <GitHubCalendar  style={{  margin:"auto" }} username= "arpit017" />
    </div>
    </div>
  );
};

export default Projects;
