import axios from 'axios'

export default class PostService {
    static getPosts() {
        return async (dispatch) => {
            const response = await axios.get('https://my-json-server.typicode.com/ilgizalimoff/posts_and_comments_server/posts')
            dispatch({ type: 'GET_POSTS', payload: response.data })
        }
    }

    static getPostById(id) {
        return async (dispatch) => {
            const response = await axios.get('https://my-json-server.typicode.com/ilgizalimoff/posts_and_comments_server/posts/' + id)
            dispatch({ type: 'GET_POST_BYID', payload: response.data })
        }
    }

    static getCommentsById(id) {
        return async (dispatch) => {
            const response = await axios.get('https://my-json-server.typicode.com/ilgizalimoff/posts_and_comments_server/comments?postId=' + id)
            dispatch({ type: 'GET_COMMENTS_BYID', payload: response.data })
        }
    }

    static getProjects() {
        return async (dispatch) => {
            const response = await axios.get('https://my-json-server.typicode.com/ilgizalimoff/server_projects/prjects')
            dispatch({ type: 'GET_PROJECTS', payload: response.data })
        }
    }

    static getProjectsByType(typeProject) {
        return async (dispatch) => {
            const response = await axios.get('https://my-json-server.typicode.com/ilgizalimoff/server_projects/prjects?type=' + typeProject)
            dispatch({ type: 'GET_PROJECT_BYTYPE', payload: response.data })
        }
    }
    
    static getContacts() {
        return async (dispatch) => {
            const response = await axios.get('https://my-json-server.typicode.com/ilgizalimoff/server/contacts')
            dispatch({ type: 'GET_CONTACTS', payload: response.data })
        }
    }
}