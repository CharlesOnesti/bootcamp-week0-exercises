import React from 'react'

const Textbar = ({placeholder, type, label, setter}) => {

    return (
        <input	placeholder={placeholder} type={type} onChange={e => setter({ [label]: e.target.value})}/>
    )
} 

export default Textbar