import { Box, Container, Divider, Grid, GridItem, Image, ListItem, UnorderedList,Text } from '@chakra-ui/react'
import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div >
        <Box padding={"80px 100px 80px 110px"}  bg={'blue.400'}> 
        <Box color={"whiteAlpha.800"} display={'flex'} justifyContent={'space-between'}>
            <Box w={"50%"}  >
                <Image src='icon.png' w={'190px'} />
                <Container fontSize={"17px"}  fontWeight={"100"} color={"whiteAlpha.700"} marginLeft={"-2"} marginTop={'13px'} textAlign={'left'} maxW={'390px'}>
                  Convenience is our priority to satisfy our customers, and we provide off the features you can easily and quickly
                </Container>
            </Box>
            <Box>
            <Grid  paddingTop={"30px"} gap={"20px"} templateColumns={"1fr 1fr 1fr"} >
                <GridItem>
                    <UnorderedList >
                        <ListItem  className={styles.ListItem} >About </ListItem>
                        <ListItem color={"whiteAlpha.700"} className={styles.ListItem}  >How to Book </ListItem>
                        <ListItem   color={"whiteAlpha.700"} className={styles.ListItem} >Contact Us</ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem} >Help Center</ListItem>
                    </UnorderedList>
                </GridItem>
                <GridItem>
                    <UnorderedList >
                        <ListItem className={styles.ListItem} >Products </ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem}  >destination </ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem} >Flight</ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem} >Lodging</ListItem>
                    </UnorderedList>
                </GridItem>
                <GridItem>
                    <UnorderedList >
                        <ListItem className={styles.ListItem} >Social </ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem}  >Facebook </ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem} >Twitter</ListItem>
                        <ListItem  color={"whiteAlpha.700"} className={styles.ListItem} >Instagram</ListItem>
                    </UnorderedList>
                </GridItem>
            </Grid>
            </Box>
            </Box>

           <Divider mb={"20px"} mt={"30px"} border={'1px solid'} borderColor={'white'}/>
            <Box  fontSize={"16px"} color={'whiteAlpha.700'} display={'flex'} justifyContent={'space-between'}>
                <Text>Privacy Policy</Text>
                <Text>Copyright 2022 Alcazar</Text>
            </Box>
        </Box>

    </div>
  )
}