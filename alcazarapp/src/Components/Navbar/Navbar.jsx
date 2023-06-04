import React from "react";
import { Image, Box, Flex, Button } from "@chakra-ui/react";

import "./Navbar.css";
import { Link } from "react-router-dom";

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
                <Button style={{padding:"5px",height:"30px"}} variant='outline'>Signup</Button>
              </Link>
              <Link to="/login">
                <Button style={{padding:"5px",height:"30px"}} variant='outline'>Login</Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
