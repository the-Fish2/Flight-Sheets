import axios from 'axios'
const baseUrl = 'http://localhost:5500/flights'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getOne = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const create = (newNoteObj) => {
    const request = axios.post(baseUrl, newNoteObj)
    return request.then(response => response.data)
}

const update = (id) => {
    axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    getOne,
    create,
    update
}