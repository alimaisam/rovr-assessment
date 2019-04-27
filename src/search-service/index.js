import Store from './store'
import Model from './model'
import Route from './route'

import express from 'express'
const router = express.Router()

function Service () {
    const store = Store()
    const model = Model(store)
    const route = Route(model)
  
    router
      .get('/search/repo/language', route.getRepoByLanguage)
      .get('/search/repo/topic', route.getRepoByTopic)
  
    return router
  }
  
  export default (options) => {
    return {
      basePath: '/search',
      info: {
        name: 'Search Service',
        service: 'search',
        version: '1.0.0',
        description: 'Endpoint for search service',
        paths: {
          searchByLanguage: {
            method: 'GET',
            path: '/search/repo/language'
          },
          searchByTopic: {
            method: 'GET',
            path: '/search/repo/topic'
          }
        }
      },
      route: Service(options)
    }
  }