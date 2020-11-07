import React from 'react'

const Person = (props) => {
    return (
        <div className = "Person">
            <p>I am {props.name} and my age is {props.age}</p>
        </div>
    )
}

export default Person
