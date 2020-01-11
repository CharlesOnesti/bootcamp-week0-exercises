import React, {useState, useReducer} from 'react'
import Form from './styles'
import Container from '../container/styles'
import List from '../list-item'
import FButton from '../list-item/form-button'
import Textbar from './textbar'
import nanoid from 'nanoid'


const Input = () => {
    const todoReducer = (prevState, payload) => ({...prevState, ...payload})
    const [todo, setTodo] = useReducer(todoReducer, {
        title: '', text: '', date: ''
    })
    const [alltodos, setAllTodos] = useState([])
    const [search, setSearch] = useState({title: ''})
    
    
    return(
        <Container>
            <Form>
                <Textbar placeholder="Category" type="text" label="title" setter={setTodo}/>
                <Textbar placeholder="Description" type="text" label="text" setter={setTodo}/>
                <Textbar type="date" label="date" setter={setTodo}/>
                <FButton text="create" alltodos={alltodos} action={(e) => {
                    e.preventDefault()
                    setAllTodos([...alltodos, {todo, id: nanoid()}])}}/>
            </Form>
            <Form>
                <Textbar placeholder="Search By Category" type="text" label="title" setter={setSearch}/>
            </Form>
            {alltodos.filter(x => {
                if (x.todo.title.includes(search.title) || null==x.todo.title){
                    return true
                }
                return false
            }).map((todo) => <List alltodos={alltodos} setAllTodos={setAllTodos} key={todo.id} {...todo}/>)}
        </Container>
    )
}

export default Input