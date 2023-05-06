import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

const Home = () => {
  const [result, setResult] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [finalPoint, setFinalPoint] = useState("");
  const [btnInt, setBtnInt] = useState(1);
  const btns = new Array(100).fill(1);

  const options = {
    method: "GET",
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {
      q: `${endpoint}`,
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
    console.log(btnInt)
}
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={endpoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>

      {result.map((item) => {
        return (
          <div>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
      
      {
        btns.map((number, index) => {
            return (
                <Button value={btnInt} onClick={() => paginate(index+1)}>{index+1}</Button>
            )
        })
      }
    </div>
  );
};

export default Home;
