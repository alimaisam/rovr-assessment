export default function Model ( store ) {
    async function language (query) {
      return store.language(query.keyword, query.page, query.per_page)
    }
  
    async function topic (query) {
      return store.topic(query.keyword, query.page, query.per_page)
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