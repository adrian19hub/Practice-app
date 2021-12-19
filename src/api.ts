const axios = require('axios').default;


export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}
export interface Post {}
export interface Comment {}

export const getUsers = async (): Promise<User[]> => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

