import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Button,
  HStack,
  Box,
  Heading,
  filter,
} from "@chakra-ui/react";
import Loader from "./Loader";
import NewsPad from "./NewsCard";
const News = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const filters = [
    "General",
    "Military",
    "Entertainment",
    "Sports",
    "Science",
    "Politics",
    "Education",
    "Information Technology",
    "Cybersecurity",
  ];
  const [queryPoint, setqueryPoint] = useState(0);
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
    params: {
      q: `${queryPoint}`,
      pageNumber: "1",
      pageSize: "10",
      autoCorrect: "true",
      fromPublishedDate: "null",
      toPublishedDate: "null",
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
        setResults(response.data.value);
        console.log(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [queryPoint]);
  const changeQuery = (number) => {
    setLoading(true);
    setqueryPoint(number);
  };

  return (
    <Container maxW={"container.xl"}>
      <HStack wrap={"wrap"}>
        {filters.map((number, index) => {
          return (
            <Button
              my={"3"}
              value={queryPoint}
              onClick={() => changeQuery(index + 1)}
            >
              {number}
            </Button>
          );
        })}
      </HStack>
        {
          loading ? (
            <Loader />
          ) : (
            <>
<Container maxW={"container.xl"} mt={10} mb={10}>
        <Heading>{filters[queryPoint]}</Heading>
      </Container>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        mt={5}
        mx={4}
      >
        {results.map((item, index) => {
          return (
            <div>
              <NewsPad
              id = {item.id}
                img={item.image.url}
                alt={item.title}
                title={item.title}
                baseUrl={item.webpageUrl}
                key={item.index}
                date={item.datePublished}

              />
            </div>
          );
        })}
      </Box>
      </>
          )
        }


      
    </Container>
  );
};

export default News;
