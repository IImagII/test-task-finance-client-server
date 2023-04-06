'use strict'
const express = require('express')
const http = require('http')
const io = require('socket.io')
const cors = require('cors')

const FETCH_INTERVAL = 10000
const PORT = process.env.PORT || 4000

const tickers = [
   'AAPL', // Apple
   'GOOGL', // Alphabet
   'MSFT', // Microsoft
   'AMZN', // Amazon
   'FB', // Facebook
   'TSLA', // Tesla
]

//генератор случайных чисел с заданным диапазоном
function randomValue(min = 0, max = 1, precision = 0) {
   const random = Math.random() * (max - min) + min
   return random.toFixed(precision)
}

//текущая дата и время в UTC (координированное всемирное время).
function utcDate() {
   const now = new Date()
   return new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
   )
}

//генерирует котировки для нескольких акций
function getQuotes(socket) {
   const quotes = tickers.map(ticker => ({
      ticker,
      exchange: 'NASDAQ',
      price: randomValue(100, 300, 2),
      change: randomValue(0, 200, 2),
      change_percent: randomValue(0, 1, 2),
      dividend: randomValue(0, 1, 2),
      yield: randomValue(0, 2, 2),
      last_trade_time: utcDate(),
   }))

   socket.emit('ticker', quotes)
}

//выдает котировки для нескольких акций через  промежутки
function trackTickers(socket) {
   // run the first time immediately
   getQuotes(socket)

   // every N seconds
   const timer = setInterval(function () {
      getQuotes(socket)
   }, FETCH_INTERVAL)

   socket.on('disconnect', function () {
      clearInterval(timer)
   })
}

//организация сервера
const app = express()
app.use(cors())
const server = http.createServer(app)

//подключение к серверу
const socketServer = io(server, {
   cors: {
      origin: '*',
   },
})

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html')
})

//обработка самого события
socketServer.on('connection', socket => {
   socket.on('start', () => {
      trackTickers(socket)
   })
})

//связь с сервером
server.listen(PORT, () => {
   console.log(`Streaming service is running on http://localhost:${PORT}`)
})
