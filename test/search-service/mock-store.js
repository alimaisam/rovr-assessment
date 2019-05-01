import fs from 'fs'


export default function MockSearchStore () {
    
    const languageMockData = fs.readFileSync('data/language-test-data.json')
    const topicMockData = fs.readFileSync('data/topic-test-data.json')
    const reportMockData = fs.readFileSync('data/report-test-data.json')

    async function language(keyword, page, per_page, search_url) {
        return languageMockData
    }

    async function topic (keyword, page, per_page, search_url) {
        return topicMockData
    }

    async function generateSearchReport() {
        return reportMockData
    }

    return {
        language,
        topic,
        generateSearchReport
    }
}