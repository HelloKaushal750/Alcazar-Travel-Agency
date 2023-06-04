import {
  Box,
  Button,
  FormControl,
  Text,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./login.module.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { signUpData } = useSelector((store) => {
    return store;
  });

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(signUpData);
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
          <Image src="icon.png" w={"160px"} />
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
