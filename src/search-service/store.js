import axios from 'axios'
import fs from 'fs'

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

        const searchData = getSearchData()
        const search = {
            url,
            search_result: result
        }
        searchData.searches.push(search);
        saveSearchURL(searchData)
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

        const searchData = getSearchData()
        const search = {
            url,
            search_result: result
        }
        searchData.searches.push(search);
        saveSearchURL(searchData)
        return result;
    }

    async function generateSearchReport () {
        const data = getSearchData()
        const body = []
        
        data.searches.forEach(search => {
            body.push(search);
        });
        return body
    }

    function getSearchData() {
        const rawdata = fs.readFileSync('data/search.json')
        const searches = JSON.parse(rawdata)
        return searches
    }

    function saveSearchURL(data) {
        const strData = JSON.stringify(data)
        fs.writeFileSync('data/search.json', strData)
    }
  
    return {
      language,
      topic,
      generateSearchReport
    }
  }
  