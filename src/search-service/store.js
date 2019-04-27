import axios from 'axios'
import circularJSON from 'circular-json'

export default function Store () {
    async function language (keyword, page = 1, per_page = 10) {
        if (!keyword)
            return null;

        const url = `https://api.github.com/search/repositories?q=language:${keyword}&page=${page}&per_page=${per_page}`
        const response = await axios.get(url)
        const result = {
            total_count: response.data.total_count,
            page,
            per_page,
            items: response.data.items
        }
        return result;
    }
  
    async function topic (keyword, page = 1, per_page = 10 ) {
        if (!keyword)
            return null;

        const url = `https://api.github.com/search/repositories?q=topic:${keyword}&page=${page}&per_page=${per_page}`
        const response = await axios.get(url)
        const result = {
            total_count: response.data.total_count,
            page,
            per_page,
            items: response.data.items
        }
        return result;
    }
  
    return {
      language,
      topic
    }
  }
  