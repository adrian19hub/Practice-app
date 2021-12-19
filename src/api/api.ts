import User from '../models/User'
const axios = require('axios').default;

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return data
}

