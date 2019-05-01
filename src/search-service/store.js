import { getLaguageDataFromGithub, getTopicDataFromGithub } from '../helper/githubAPI'
import { readSearchData, saveSearchData } from './../helper/fileTransaction'

export default function Store () {
    async function language (keyword, page = 1, per_page = 10, search_url) {
        if (!keyword)
            return null;

        const response = await getLaguageDataFromGithub(keyword, page, per_page)
        const result = {
            total_count: response.data.total_count,
            page,
            per_page,
            items: response.data.items
        }

        const searchData = readSearchData()
        const search = {
            search_url,
            search_result: result
        }
        searchData.searches.push(search);
        saveSearchData(searchData)
        return result;
    }
  
    async function topic (keyword, page = 1, per_page = 10, search_url ) {
        if (!keyword)
            return null;

        const response = await getTopicDataFromGithub(keyword, page, per_page)
        const result = {
            total_count: response.data.total_count,
            page,
            per_page,
            items: response.data.items
        }

        const searchData = readSearchData()
        const search = {
            search_url,
            search_result: result
        }
        searchData.searches.push(search);
        saveSearchData(searchData)
        return result;
    }

    async function generateSearchReport () {
        const data = readSearchData()
        const body = []
        
        data.searches.forEach(search => {
            body.push(search);
        });
        return body
    }

    return {
      language,
      topic,
      generateSearchReport
    }
  }
  