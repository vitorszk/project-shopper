import axios from 'axios'

export const newOrder = (order) => {
    return axios.post('https://hyiotc2s56.execute-api.us-east-1.amazonaws.com/dev/new-order', order)
}
