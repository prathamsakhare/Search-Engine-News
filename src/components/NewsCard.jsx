import {
    Card,
    CardBody,
    Heading,
    Image,
    Stack,
    Center,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
import { Link } from "react-router-dom";
  
  const NewsPad = ({ id, img, alt, title, baseUrl, date }) => {
    return (
        <Link to={`news/${id}`}>
        <Card maxW={"sm"} height={"400px"} mt={'5'}>
          <CardBody>
            <Image
              src={img}
              width={"95%"}
              maxH={'200px'}
              marginX={"auto"}
              borderRadius={"md"}
            />
  
            <Stack mt={6} spacing={3} wordBreak={'break-word'}>
              <Heading size={"md"}>{title}</Heading>
              <Text fontSize={'sm'}>{date}</Text>
            </Stack>
          </CardBody>
        </Card>
        </Link>
      
    );
  };
  
  export default NewsPad;
  