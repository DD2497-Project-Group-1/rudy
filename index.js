const readline = require('readline-promise').default

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

const config = {

}

rudyAttack()

function rudyAttack() {
  for(let i = 0; i < connections, i++) {
    attack()
  }
}

function attack() {
  const stream =  createStream()
  request(stream, config)
  .then(() => {
    console.log('Successful attack')
    closeStream()
  })
  .catch(err => {
    console.error({ err })
    closeStream()
  })
}

function request(stream) {
  return new Promise((resolve, reject) => {
    request({ config })
    .then(() => {
      resolve()
    })
    .catch( err => {
      reject(err)
    })
  })
}

function createStream() {

}

function closeStream() {

}

