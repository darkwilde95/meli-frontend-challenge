import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000
const authorName = process.env.AUTHOR_NAME || ''
const authorLastName = process.env.AUTHOR_LASTNAME || ''
const meliApiUrl = process.env.MELI_API_URL || ''

export {
  port,
  authorName,
  authorLastName,
  meliApiUrl
}