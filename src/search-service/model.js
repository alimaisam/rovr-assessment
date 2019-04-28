export default function Model ( store ) {
    async function language (query, url) {
      return store.language(query.keyword, query.page, query.per_page, url)
    }
  
    async function topic (query, url) {
      return store.topic(query.keyword, query.page, query.per_page, url)
    }

    async function adminReport() {
        return store.generateSearchReport()
    }
  
    return {
      language,
      topic,
      adminReport
    }
  }