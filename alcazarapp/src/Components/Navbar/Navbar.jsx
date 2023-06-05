import React from "react";
import { Image, Box, Flex, Button } from "@chakra-ui/react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="NavbarDiv">
      <Box w={"100%"} style={{ padding: "10px" }}>
        <Box display={"block"} alignItems={"center"}>
          <Flex justifyContent={"space-evenly"} alignItems={"center"} style={{fontWeight:"600"}}>
            <Image w={"110px"} src="icon.png" />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
              <Link>Download App</Link>
              <Link>Partner With Us</Link>
              <Link>Installment</Link>
              <Link>Saved</Link>
              <Link to={'/booking'}>My Booking</Link>
            </div>
          
            <Flex alignItems={"center"} gap={"30px"}>
              <Link to={"/signup"}>
                <Button style={{padding:"5px",height:"30px",border:"none"}} variant='outline'>Signup</Button>
              </Link>
              <Link to="/login">
                <Button style={{padding:"5px",height:"30px",border:"none"}} variant='outline'>Login</Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <div className="headss">
        <div className="headingAA">
        <h1>
          Travel around the world
        </h1>
        </div>
        <div className="headingAB">
        <h4>Trusted by 80 million Travelers, Aalcazar is the world's most copetetive travel, flight</h4>
        <h4>and accommodation provider, very easy to access on your smarttree and desktop</h4>
        </div>    
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
