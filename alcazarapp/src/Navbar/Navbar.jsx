import React from 'react'
import { Image,Box, Grid, GridItem, grid, Flex, Button, Center } from '@chakra-ui/react'
import icons from '../images/icon.png'
import {ArrowBackIcon} from '@chakra-ui/icons'
import styles from '../Navbar/navbar.module.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>

const Navbar = () => {
  return (
    <div style={{backgroundColor:"blue"}} className={styles.NavbarDiv}>
      <Box alignItems={"center"} >
        <Flex justifyContent={'space-evenly'} >
        <Image w={"110px"}  src={icons}/>
      <Grid   className={styles.Navbar_Items}>
      <GridItem >Downlaod App </GridItem>
      <GridItem > Partner With Us</GridItem>
      <GridItem>Installment</GridItem>
      <GridItem marginLeft={"-40px"}>Saved</GridItem>
      <GridItem marginLeft={"-80px"}>My Booking</GridItem>
      </Grid>
      <Flex gap={"10px"} >
 <Button  size='sm'   variant={'ghost'} >Signup</Button>
      <Button size='sm' variant={'ghost'}><ArrowBackIcon/>Login</Button>
      </Flex>
     
        </Flex>
      </Box>

      

    </div>
  )
}

export default Navbar