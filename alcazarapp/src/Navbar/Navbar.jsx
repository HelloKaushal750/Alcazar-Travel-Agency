import React from 'react'
import { Image,Box, Grid, GridItem, Flex, Button,Text } from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import icons from '../Components/images/icon.png'
import styles from '../Navbar/navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div  className={styles.NavbarDiv}  >
      <Box  position={'absolute'} w={"100%"}>
      <Box display={'block'} alignItems={"center"}  >
        <Flex justifyContent={'space-evenly'} >
        <Image w={"110px"}  src={icons}/>
      <Grid   className={styles.Navbar_Items}>
      
      <GridItem >Downlaod App </GridItem>
      <GridItem > Partner With Us</GridItem>
      <GridItem>Installment</GridItem>
      <GridItem marginLeft={"-50px"}>Saved</GridItem>
      <GridItem marginLeft={"-80px"}>My Booking</GridItem>
      </Grid>
      <Flex alignItems={'center'} gap={"30px"} > 

 <Link to={'/signup'} ><Text>Signup</Text></Link>
      <Text><ArrowBackIcon/>Login</Text>
      </Flex>
     
        </Flex>
      </Box>
      </Box>
      

      

    </div>
  )
}

export default Navbar