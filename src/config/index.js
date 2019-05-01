import convict from 'convict'

const PORT = {
  doc: 'The port to bind',
  format: 'port',
  default: 5000,
  env: 'PORT'
}

const config = convict({
  port: PORT,
})

const validated = config.validate({ allowed: 'strict' })

export default validated
