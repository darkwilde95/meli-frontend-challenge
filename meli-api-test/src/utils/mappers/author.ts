import { authorLastName, authorName } from '@variables'

// Add author sign to JSON object
const authorMapper = <T = any>(response: T) => ({
  ...response,
  author: {
    name: authorName,
    lastname: authorLastName
  }
})

export default authorMapper