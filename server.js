const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const yelpFeedRoutes = require('./routes/yelp')
const dishesRoutes = require('./routes/dishes')
const sellersRoutes = require('./routes/sellers')
const usersRoutes = require('./routes/users')
const imageRoutes = require('./routes/cloudinary')
const sequelize = require('./db/database')
const config = require('./config/config')

require('dotenv').config()

const server = express()

server.use(morgan('dev'))
server.use(express.json({ limit: '50mb' }))
server.use(express.urlencoded({ limit: '50mb', extended: true }))
server.use(helmet())
server.use(cors())

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

server.use('/yelp', yelpFeedRoutes)
server.use('/image', imageRoutes)
server.use('/dishes', dishesRoutes)
server.use('/sellers', sellersRoutes)
server.use('/users', usersRoutes)

sequelize.sync().then(() => {
  server.listen(config.host.port, async () => {
    console.log(`Server is running on port ${config.host.port}`)
    console.log(
      '<--------------------Database is Connected!--------------------->',
    )
  })
})
