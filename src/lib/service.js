import axios from 'axios'

const baseUrl = "http://a919649894bb04154ba6bbec73ac46f8-420501796.eu-west-1.elb.amazonaws.com:8080"

export const loadTodos = () => {
    console.log(baseUrl)
    return axios.get(baseUrl + '/tasks')
}


export const saveTodo = (todo) => {
    return fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json())
}

export const updateTodo = (todo) => {
    return fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json())
}

export const destroyTodo = (id) => {
    return fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}