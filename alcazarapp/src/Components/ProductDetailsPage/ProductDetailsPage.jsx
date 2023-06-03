import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Image, Badge, Heading, Button, Highlight, Table, TableContainer, Tbody, Td, Tr, UnorderedList, ListItem, Text, Grid, Input, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, Select, FormControl } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import style from '../ProductDetailsPage/Product.module.css';
import { Footer } from '../footer/Footer';
import Navbar from '../../Navbar/Navbar';

const ProductDetailsPage = () => {

    const dispatch = useDispatch();
    const [bookingdata, setbookingdata] = useState({
        name: "",
        email: "",
        contactNo: "",
        type: "",
        date: "",
        tickets: ""
    })

    const handlesubmit = (e) => {
        console.log("handling ");
        console.log(bookingdata)
        e.preventDefault();
        dispatch({ type: 'BOOKINGDATA', payload: bookingdata })
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnref = useRef();
    return (
        <div>
            <Navbar/>
            <Image h={"600px"} w={"1500px"} src="https://wallpaperaccess.com/full/1192057.jpg" />
            {/* <Center  className={style.ImageText}>Amazing Tour </Center> */}

            <Box>
                <Box display={'flex'} flexDirection={'row'} >
                    <Box margin={"20px 100px"} w={"50%"}>
                        <Box className={style.TopStack} >
                            <Heading fontWeight={'bold'} >Rialto Bridge , Italy </Heading>
                            <Badge fontSize={"20px"}> $ 860 / Per Person</Badge>
                        </Box>
                        <Box marginBottom={"20px"} maxWidth={"700px"} textAlign={"left"}   >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a culpa id accusantium quaerat veniam amet quasi delectus quibusdam praesentium sunt qui
                            ipsum deserunt quis itaque perferendis doloribus hic iusto soluta omnis labore repudiandae, animi nisi ducimus. Molestiae reiciendis eaque ea quisquam amet
                            facilis nisi architecto sequi quae ratione, officia non voluptate. Aliquid officia in similique delectus vitae dolore laborum praesentium aperiam fugit sequi
                            ipsum molestias atque eveniet itaque magnam accusantium voluptatibus odio dolor quos quis sed et doloribus, accusamus ipsam? Dicta facere eum illo mollitia!
                            Ipsam deleniti corporis distinctio voluptas natus ab pariatur consectetur vero fugiat. Quos, ut facere.
                        </Box>

                        <Box display={'flex'} flexDirection={'column'}  >

                            <Text fontSize={"22px"} mb={'10px'}><InfoIcon w={'30px'} textAlign={'left'} />    INFORMATION</Text>
                            <TableContainer>
                                <Table>
                                    <Tbody>
                                        <Tr>
                                            <Td>Destination</Td>
                                            <Td>Italy</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Departure</Td>
                                            <Td>Main Square,Old Town</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Departure Time</Td>
                                            <Td>Appr. 8.30AM </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Return Time</Td>
                                            <Td>Appr. 7.30PM</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Dress Code</Td>
                                            <Td>Casual, Confortable and Light</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Included</Td>
                                            <Td>
                                                <UnorderedList >
                                                    <ListItem p={"4px"}>5Star Accommodation</ListItem>
                                                    <ListItem p={"4px"}>Airport Transfer </ListItem>
                                                    <ListItem p={"4px"}>Breakfast</ListItem>
                                                    <ListItem p={"4px"}>Presonal Guide</ListItem>
                                                </UnorderedList>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            <Text m={"10px 0px 10px 0px"} fontSize={"22px"} mb={'10px'}> GALLERY </Text>
                            <Grid className={style.galleryGrid}>
                                <Image className={style.galleryImage} src='https://smudgedpostcard.com/wp-content/uploads/2019/11/Piazza-del-Popolo-Ascoli-Piceno.jpg' />
                                <Image className={style.galleryImage} src='https://mypathintheworld.com/wp-content/uploads/2022/02/Piazzas-in-Italy-piazza-plebiscito-naples.jpg' />
                                <Image className={style.galleryImage} src='https://architectureofcities.com/wp-content/uploads/2021/09/St.Peters.Square.Rome_.Above-AOC-Huge.jpg' />
                                <Image className={style.galleryImage} src='https://thumbs.dreamstime.com/b/night-view-venice-italy-nightscape-beautiful-city-129128439.jpg' />
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={style.discountBookBox} >
                        <Button ref={btnref} onClick={onOpen} _hover={"none"} borderRadius={"30px"} marginBottom={"40px"} bg={"blue.400"} p={"15px 34px"} color={'white'}>Book Now</Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnref}
                            className={style.Drawer}

                        >
                            <DrawerOverlay />
                            <DrawerContent >
                                <DrawerCloseButton />
                                <DrawerHeader >
                                    Book This Tour
                                </DrawerHeader>
                                <DrawerBody>
                                    <form onSubmit={handlesubmit}>
                                        <FormControl className={style.formbook}>
                                            <Input placeholder='Full Name*' type='text' onChange={(e) => { setbookingdata({ ...bookingdata, name: e.target.value }) }} />
                                            <Input placeholder='Email id*' type='email' onChange={(e) => { setbookingdata({ ...bookingdata, email: e.target.value }) }} />
                                            <Input type='date' onChange={(e) => { setbookingdata({ ...bookingdata, date: e.target.value }) }} />
                                            <Select placeholder='Type' onChange={(e) => { setbookingdata({ ...bookingdata, type: e.target.value }) }}>
                                                <option>Normal</option>
                                                <option> Semi-Premium</option>
                                                <option>  Premium</option>
                                            </Select>
                                            <Input type='number' placeholder='Contact No*' onChange={(e) => { setbookingdata({ ...bookingdata, contactNo: e.target.value }) }} />
                                            <Input placeholder='Number of Tickets*' onChange={(e) => { setbookingdata({ ...bookingdata, tickets: e.target.value }) }} />
                                            <Button type='Submit' bg={"blue.400"} p={"15px 34px"} color={'white'} _hover={"none"} >Submit</Button>
                                        </FormControl>

                                    </form>


                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                        <Image w={"300px"} marginLeft={'50px'} mb={"20px"} src='https://img.freepik.com/premium-vector/travel-sale-banner-with-yellow-tag-tickets-hot-fares-domestic-international-flights_372769-345.jpg?w=2000' />

                        <Highlight query='MASAI40' styles={{ px: '1', py: '1', bg: 'black.100' }}  >40 % OFF on MASAI40 </Highlight>
                        <Image w={"300px"} m={'10px 0px 20px 50px'} src='https://img.freepik.com/free-vector/flat-design-travel-sale-banner_23-2149081602.jpg?w=1060&t=st=1685047157~exp=1685047757~hmac=821c667ca827c3d15627ee174c5adc61139f48e11f61a69e3f84b7c3f7826ba8' />
                        <Highlight query='MASAI50' styles={{ px: '1', py: '1', bg: 'black.100' }} >50 % OFF on MASAI50 </Highlight>

                    </Box>
                </Box>



            </Box>
<Footer/>
        </div>
    )
}

export default ProductDetailsPage

