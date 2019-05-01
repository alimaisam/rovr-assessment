import axios from 'axios'

export function getLaguageDataFromGithub(keyword, page, per_page) {
    const url = `https://api.github.com/search/repositories?q=language:${keyword}&page=${page}&per_page=${per_page}`
    return axios.get(url)
} 

export function getTopicDataFromGithub(keyword, page, per_page) {
    const url = `https://api.github.com/search/repositories?q=topic:${keyword}&page=${page}&per_page=${per_page}`
        return axios.get(url)
}
