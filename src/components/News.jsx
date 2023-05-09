import React, { useEffect } from 'react'
import axios from 'axios';
const News = () => {
    

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
  params: {
    q: 'taylor swift',
    pageNumber: '1',
    pageSize: '10',
    autoCorrect: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null'
  },
  headers: {
    'X-RapidAPI-Key': '0dbc205294msh8b479bc23f44c90p1c51f6jsn0fbba5f14b24',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};
useEffect(() => {
    const getData = async () => {

        try {
            const response = await axios.request(options);
            console.log(response.data.value);
        } catch (error) {
            console.error(error);
        }
    }
    getData()
}, [])
  return (
    
      <></>
  )
}

export default News