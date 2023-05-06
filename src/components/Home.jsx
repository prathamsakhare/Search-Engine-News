import React from "react";
import { Container, HStack, Box, Img, Heading, Center } from "@chakra-ui/react";
import homeImg from "../assets/homeImg.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container maxW={"container.xl"} mt={5}>
      <Box mt={20}>
        <HStack>
          <Center flexWrap={["wrap", "nowrap"]} gap={10}>
            <Link to={'/news'}>
              <Img
                src={homeImg}
                w={["300px", "500px"]}
                height={["300px", "500px"]}
              />
            </Link>

              <Heading>
                Now all the News in entertainment World are on your fingertips!!
              </Heading>
          </Center>
        </HStack>
      </Box>
    </Container>
  );
};

export default Home;
