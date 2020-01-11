import React from 'react'
import {Navbar, Table, Td} from './styles'
import { Link } from 'react-router-dom'

const Nav = () => (
    <Navbar>
        <Table>
            <tr>
                <Td><Link to="/home">HOME</Link></Td>
                <Td><Link to="/PA">TODO LIST</Link></Td>
            </tr>
        </Table>
    </Navbar>
)

export default Nav