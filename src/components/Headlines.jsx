import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  HStack,
  Box,
  Input,
  VStack,
  Heading,
  Center,
  Container,
} from "@chakra-ui/react";
import CardPad from "./CardPad";
import Loader from "./Loader";

const Headlines = () => {
  const [result, setResult] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [finalPoint, setFinalPoint] = useState("Common News");
  const [btnInt, setBtnInt] = useState(1);
  const [loading, setLoading] = useState(true);
  const btns = new Array(100).fill(1);
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
    params: {
      q: `${finalPoint}`,
      pageNumber: `${btnInt}`,
      pageSize: "10",
      autoCorrect: "true",
    },
    headers: {
      "X-RapidAPI-Key": "0dbc205294msh8b479bc23f44c90p1c51f6jsn0fbba5f14b24",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data.value);
        setResult(response.data.value);
        setLoading(false);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [finalPoint, btnInt]);
  const onChangeHandler = (e) => {
    setEndpoint(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endpoint);
  };
  const paginate = (number) => {
    setBtnInt(number);
    console.log(btnInt);
  };

  return (
    <Container maxW={"container-xl"}>
      <form onSubmit={submitHandler} style={{ marginTop: "30px" }}>
        <VStack>
          <Input
            type="text"
            value={endpoint}
            onChange={onChangeHandler}
            w={"50%"}
            placeholder="Enter Your Search Here..."
          />
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <Container maxW={"container.xl"}>
            <Container maxW={"container.xl"} mt={10} mb={10}>
              <Heading>{finalPoint}</Heading>
            </Container>
            
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"space-evenly"}
              mt={5}
              mx={4}
            >
              {result.map((item, index) => {
                return (
                  <div>
                    <CardPad
                      img={item.thumbnail}
                      alt={item.title}
                      title={item.title}
                      baseUrl={item.webpageUrl}
                      key={item.index}
                    />
                  </div>
                );
              })}
            </Box>

            
          </Container>
        )}
        <Center>
              <HStack
                width={"container.lg"}
                overflowX={"auto"}
                p={"8"}
                className="example"
              >
                {finalPoint
                  ? btns.map((number, index) => {
                      return (
                        <Button
                          value={btnInt}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </Button>
                      );
                    })
                  : ""}
              </HStack>
            </Center>
      </Container>
    </Container>
  );
};

export default Headlines;
