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
} from "@chakra-ui/react";
import CardPad from "./CardPad";

const Headlines = () => {
  const [result, setResult] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [finalPoint, setFinalPoint] = useState("");
  const [btnInt, setBtnInt] = useState(1);
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
      "X-RapidAPI-Key": "9ec33527cbmshfaf2fd1d87d9a76p18f24ajsnb026150744ca",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data.value);
        setResult(response.data.value);
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
    <div>
      <form onSubmit={submitHandler} style={{ marginTop: "30px" }}>
        <VStack>
          <Input
            type="text"
            value={endpoint}
            onChange={onChangeHandler}
            w={"50%"}
            placeholder="Enter Celebrity Name Here..."
          />
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
      
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          mt={5}
          mx={4}
        >
          {result.map((item) => {
            return (
              <div>
                <CardPad
                  img={item.thumbnail}
                  alt={item.title}
                  title={item.title}
                  baseUrl={item.webpageUrl}
                />
              </div>
            );
          })}
        </Box>
      

      <HStack width={"full"} overflowX={"auto"} p={"8"} className="example">
        {finalPoint
          ? btns.map((number, index) => {
              return (
                <Button value={btnInt} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Button>
              );
            })
          : ""}
      </HStack>
    </div>
  );
};

export default Headlines;
