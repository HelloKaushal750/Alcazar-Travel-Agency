import {
  Box,
  Button,
  FormControl,
  Text,
  Heading,
  Image,
  Input,
  useToast,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./login.module.css";

import {  useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const toast = useToast();
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultisOpen: true });


  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { signUpData } = useSelector((store) => {
    return store;
  });

  const calling = () =>{

     navigate('/');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(signUpData);
    if (Login.email === "" || Login.password === ""){
      return alert("Please Insert email & password");
     }
    signUpData.map((ele)=>{
     
      if (ele.email === Login.email && ele.password === Login.password ){
        toast({
          description: "You Login Successfully ",
          status: "success",
          duration: 2000,
          isClosable: true
      })
      calling();
      
      }
      else{
        return alert("Wrong Credentials")
      }
      
    })
   
  };
  return (
    <div className={styles.background}>
      <Box>
        <Box
          display={"flex"}
          padding={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={'/'} >
          <Image src="icon.png" w={"160px"} />
          </Link>
      
          <Link to={"/signup"}>
            <Text marginRight={"10px"} fontSize={"20px"} color={"white"}>
              Signup
            </Text>
          </Link>
        </Box>
        <Box width={"25%"} margin={"auto"} padding={"14px"} color={"white"}>
          <form onSubmit={handleLogin}>
            <Heading fontSize={"27px"} mb={"40px"} color={"white"}>
              Login to Alcazar
            </Heading>

            <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Input
                type="email"
                _placeholder={{ color: "white" }}
                onChange={(e) => {
                  setLogin({ ...Login, email: e.target.value });
                }}
                placeholder="Email"
              />
              <Input
                type="password"
                _placeholder={{ color: "white" }}
                placeholder="Confirm Password"
                onChange={(e) => {
                  setLogin({ ...Login, password: e.target.value });
                }}
              />

              <Button
                borderRadius={"20px"}
                type="submit"
                fontWeight={"light"}
                bg={"blue.400"}
                _hover={"none"}
                border={"1px solid"}
                color={"white"}
              >
                Log In
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
