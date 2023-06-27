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

const CardPad = ({ img, alt, title, baseUrl }) => {
  return (
    <a href={baseUrl}>
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
            
          </Stack>
        </CardBody>
      </Card>
    </a>
  );
};

export default CardPad;
