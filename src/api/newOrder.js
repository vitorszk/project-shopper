import axios from 'axios'

export const newOrder = (order) => {
    return axios.post('http://localhost:3003/new-order', order)
}
