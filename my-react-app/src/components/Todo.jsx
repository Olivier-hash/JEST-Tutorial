import React from "react"

function Todo({todo}) {
  const {id, title, comleted} = todo;
  const h1 = <h1>{title}</h1>
  const text = comleted ? <strike>{h1}</strike> : h1;
  return (
    <div data-testid={`todo-${id}`}>{text} </div>
  )
}

export default Todo