import { Box, Button, FormControl, Text, Heading, Image, Input, useToast, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from './signup.module.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


export const SignUp = () => {
    const [signIn, setsignIn] = useState({
        name: "",
        email: "",
        contactNo: "",
        password: ""
    })
    const dispatch = useDispatch()
    const toast = useToast();
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultisOpen: true });

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(signIn.name)
        if (signIn.name === ""|| signIn.emial === ""|| signIn.contactNo === ""|| signIn.password === "" ) {
          return  alert("Please fill all Details for Sign Up")
        }
        toast({
            title: 'Account Created',
            description: "We've created your account for you",
            status: "success",
            duration: 2000,
            isClosable: true
        })
        dispatch({ type: "SIGNUPDATA", payload: signIn })
    }


    return (
        <div className={style.background}>

            <Box>
                <Box display={'flex'} padding={"20px"} justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Link to={'/'} >
                    <Image src='icon.png' w={'160px'} />
                    </Link>
                  
                    <Link to={'/login'} >
                        <Text marginRight={"10px"} fontSize={"20px"} color={'white'} >Login</Text>
                    </Link>
                </Box>
                <Box
                    width={"27%"}
                    margin={'0% 65%'}
                    color={'black'}
                    boxShadow='lg' p='6' rounded='md' bg='white'
                >

                    <form onSubmit={handleSignIn} >

                        <Heading fontSize={"27px"} mb={"40px"} >Welcome to Alcazar</Heading>

                        <FormControl display={'flex'} flexDirection={'column'} gap={"10px"}  >

                            <Input type='text' onChange={(e) => { setsignIn({ ...signIn, name: e.target.value }) }} placeholder='Full name' />
                            <Input type='email' onChange={(e) => { setsignIn({ ...signIn, email: e.target.value }) }} placeholder='Email' />
                            <Input type='text' maxLength={10} onChange={(e) => { setsignIn({ ...signIn, contactNo: e.target.value }) }} placeholder='Contact No' />
                            <Input type='password' onChange={(e) => { setsignIn({ ...signIn, password: e.target.value }) }} placeholder='Password' />
                            <Input type='password' placeholder='Confirm Password' />

                            <Button onClick={onOpen} borderRadius={'20px'} type='submit' fontWeight={'light'} bg={'blue.400'} _hover={"none"} border={"1px solid"} color={'white'} >Sign In</Button>
                        </FormControl>
                    </form>
                </Box>

            </Box>
        </div>
    )
}