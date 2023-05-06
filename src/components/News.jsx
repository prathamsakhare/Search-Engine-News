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
    'X-RapidAPI-Key': '9ec33527cbmshfaf2fd1d87d9a76p18f24ajsnb026150744ca',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};
useEffect(() => {
    const getData = async () => {

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
})
  return (
    
      <></>
  )
}

export default News