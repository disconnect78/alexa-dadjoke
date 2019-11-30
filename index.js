const Alexa = require('ask-sdk-core')
const DadJokes = require('dadjokes-wrapper')

main()

async function main () {
  const joke = await getDadJoke()
  console.log(joke)
}

function getDadJoke () {
  const dj = new DadJokes()
  const joke = dj.randomJoke()
  return joke
}
