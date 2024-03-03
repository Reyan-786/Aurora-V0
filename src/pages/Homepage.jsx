import React from "react";
import {useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../Earth"
import { motion } from "framer-motion";
import { Box, Center, Flex, Text,Image, Grid } from "@chakra-ui/react";
import { Body,Heading0, Heading1, Heading2, TextLarge ,Heading3, Heading4} from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useColorSwitcher from "../utils/useColorSwitcher";
import IconBox from "../components/miscellaneous/IconBox";
import SectionHeader from "../components/miscellaneous/SectionHeader";
import KS from "../assets/icons/KS.png";
import AAPL from "../assets/icons/AAPL.png";
import ADBE from "../assets/icons/ADBE.png";
import ADI_BIG from "../assets/icons/ADI_BIG.png";
import AMZN from "../assets/icons/AMZN.png";
import ASML from "../assets/icons/ASML.png";
import AVGO_BIG from "../assets/icons/AVGO_BIG.png";
import DELL from "../assets/icons/DELL.png";
import GOOG_BIG from "../assets/icons/GOOG_BIG.png";
import IBM from "../assets/icons/IBM.png";
import INTC from "../assets/icons/INTC.png";
import INTU_BIG from "../assets/icons/INTU_BIG.png";
import META_BIG from "../assets/icons/META_BIG.png";
import MSFT_BIG from "../assets/icons/MSFT_BIG.png";
import NFLX from "../assets/icons/NFLX.png";
import  NVDA from "../assets/icons/NVDA.png";
import  ORCL_BIG from "../assets/icons/ORCL_BIG.png";
import  QCOM_BIG from "../assets/icons/QCOM_BIG.png";
import  SONY_BIG from "../assets/icons/SONY_BIG.png";
import  TSLA_BIG from "../assets/icons/TSLA_BIG.png";
import  TSM from "../assets/icons/TSM.png";
import  UBER from "../assets/icons/UBER.png";
import  IconGithub from "../assets/icons/IconGithub.png";
import  IconInstagram from "../assets/icons/IconInstagram.png";
import  IconLinkedin from "../assets/icons/IconLinkedin.png";
import  IconTwitter from "../assets/icons/IconTwitter.png";
import aurora from "../assets/projects/aurora.png";

const Homepage = () => {
  const navigate = useNavigate();
  const { colorDark, secondary } = useColorSwitcher();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="div"
        mt={{ base: "4em", md: "8em" }}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Flex justifyContent="center">
          <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
            <Flex
              flexDir="column"
              justifyContent="space-around"
              h={{ base: "500", lg: "500" }}
              alignItems={{ sm: "center", lg: "flex-start" }}
            >
              <Heading0>
              Onboard your global
              team in 
              </Heading0>
              
              <Heading4 big={true} color={secondary}>
                day, hours, minutes , seconds
              </Heading4>

              <Body
                w={{ base: "80%", xl: "40%" }}
                bg={{
                  base: "red.200",
                  xs: "yellow.200",
                  sm: "blue.200",
                  md: "green.200",
                }}
                fontWeight="bold"
              >
               <br>
               </br>
               Aurora is a better way to hire. We're an AI-powered platform that sources, vets, and pays your next employees
              </Body>
              <br>
               </br>
               <PrimaryButton
                onClick={() => handleNavigate('/team')} 
                theme={secondary}
                mt={4}
              >
                Hire a team
              </PrimaryButton>
              <PrimaryButton
                onClick={() => handleNavigate('/demo')} 
                theme={secondary}
                mt={4}
              >
                Take a Demo
              </PrimaryButton>
            </Flex>
          </Box>
          <Center
          width={{ lg: "20rem", xl: "65rem" }}
          height={{ lg: "40rem", xl: "45rem" }}
          display={{ base: "none", lg: "block" }}
          mt="0"
        >
          <Canvas style={{ height: '100vh' }}>
            <ambientLight />
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <Earth />
              <Environment preset='sunset'/>
              <ContactShadows position={[0,0,0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#000000" />
            </Suspense>
          </Canvas>
        </Center>
      </Flex>
    </Box>
  </motion.div>
  );
};

const Hire = ({ ...props }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        {...props}
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="50px">
          <SectionHeader mr="16px">
            <Heading2>Hiring</Heading2>
          </SectionHeader>
        </Box>
        <Text
          pb="1em"
          fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
          textAlign="center"
        >
          Hire talent previously at
        </Text>
        <Grid
          mx="auto"
          py="5em"
          w={{ base: "100%", lg: "90%" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          border="1px solid"
          gap={{ base: 8, md: 16 }}
          placeItems="center"
        >
          <Languages />
          <Frameworks />
          <ComputerVision />
          <Tools />
        </Grid>
      </Box>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <>
      <IconBox
        icon={KS}
        size={{ base: "3em", xl: "5.5em" }} />
      <IconBox
        icon={AAPL}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={ADBE}
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={ADI_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />}
       {<IconBox
        icon={AMZN}
        size={{ base: "3em", xl: "5.5em" }}
      />}
      {<IconBox
        icon={DELL}
        size={{ base: "3em", xl: "5.5em" }}
      />}

    </>
  );
};
const Frameworks = () => {
  return (
    <>
      <IconBox
        icon={AVGO_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={GOOG_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IBM}
        name="Android"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={INTU_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />}
      {<IconBox
        icon={INTC}
        size={{ base: "3em", xl: "5.5em" }}
      />}
       {<IconBox
        icon={ASML}
        size={{ base: "3em", xl: "5.5em" }}
      />}

    </>
  );
};

const Tools = () => {
  return (
    <>
      <IconBox
        icon={META_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={MSFT_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={NFLX}
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={NVDA}
        size={{ base: "3em", xl: "5.5em" }}
      />}
       {
        <IconBox
          icon={UBER}
          size={{ base: "3em", xl: "5.5em" }} />
      }
    </>
  );
};

const ComputerVision = () => {
  return (
    <>
      <IconBox
        icon={ORCL_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={QCOM_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={SONY_BIG}
        size={{ base: "3em", xl: "5.5em" }}
      />
      {
        <IconBox
          icon={TSLA_BIG}
          size={{ base: "3em", xl: "5.5em" }} />
      }
      {
        <IconBox
          icon={TSM}
          size={{ base: "3em", xl: "5.5em" }} />
      }
    </>
  );
};


const Contact = ({ ...props }) => {
  const { secondary } = useColorSwitcher();

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        my="4em"
        {...props}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="72px">
          <SectionHeader mr="16px">
            <Heading2>Contact</Heading2>
          </SectionHeader>
        </Box>
        <Box
          mx="auto"
          w={{ base: "90%", xl: "60%" }}
          display="grid"
          placeItems="center"
        >
          <TextLarge mb="64px" align="center">
          If you have inquiries or wish to initiate a conversation, please feel free to reach out to us via my inbox.
          </TextLarge>
        </Box>
        <Grid
          mt="3em"
          mx="auto"
          w={{ base: "100%", lg: "70%" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={{ base: 8 }}
          placeItems="center"
          pb="3em"
        >
          <IconBox
            icon={IconLinkedin}
            link="https://www.linkedin.com/in/mohammad-adnaan-51272024a/"
            size="3em"
            name="Linkedin"
          />
          <IconBox
          icon={IconTwitter}
          link="https://twitter.com/callmeadnaan19"
          size="3em"
          name="Twitter"
          />
          <IconBox
            icon={IconInstagram}
            link="https://www.instagram.com/adnaan.this.side/"
            size="3em"
            name="Instagram"
          />
        </Grid>
      </Box>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer style={{textAlign: "center"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <img src={aurora} alt="Logo" style={{width: "60px", height: "60px"}} />
        <br />
        <span>© 2024 Aurora.io Corporation</span>
      </div>
    </footer>
  );
}

const HomeAndHireAndContact = () => {
  return (
    <>
      <Homepage />
      <Hire />     
      <Contact/>
      <Footer />
    </>
  );
};

export default HomeAndHireAndContact;

