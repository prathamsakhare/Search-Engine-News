import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Center,
} from "@chakra-ui/react";
import React from "react";

const CardPad = ({ img, alt, title, baseUrl }) => {
  return (
    <a href={baseUrl}>
      <Card maxW={"sm"} height={"350px"} mt={'5'}>
        <CardBody>
          <Image
            src={img}
            width={"95%"}
            height={"50%"}
            marginX={"auto"}
            borderRadius={"md"}
          />

          <Stack mt={6} spacing={3}>
            <Heading size={"md"}>{title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </a>
  );
};

export default CardPad;
