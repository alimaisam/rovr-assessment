import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'

import config from './config'

// Services
import SearchService from './search-service'

// main is where our application resides
async function main () {
  // Create a new application
  const app = express()

  // Middlewares
  middlewares(app)

  const service = SearchService()

  // Initialize service by looping through them
  app.use(service.basePath, service.route)

  app.get('/', async (req, res) => {
    res.status(200).json({
      endpoints: service.info,
      routes: app.routes
    })
  })

  app.listen(config.get('port'), () => {
    console.log(`listening to port *:${config.get('port')}. press ctrl + c to cancel`)
  })

  return app
}

// middlewares takes the app, and inject the app with middlewares
function middlewares (app) {
app.use(bodyParser.urlencoded({ extended: false }))
  // To parse json
  app.use(bodyParser.json())
  
  // For security
  app.use(helmet())
  
  // Enable logging during development
  app.use(morgan('dev', {
    skip(req, res) {
      return res.statusCode < 400
    },
    stream: process.stderr
  }))

  app.use(morgan('dev', {
    skip(req, res) {
      return res.statusCode >= 400
    },
    stream: process.stdout
  }))
}

main().catch(console.log)
