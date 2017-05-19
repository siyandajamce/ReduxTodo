import React, { PropTypes } from 'react';
import {Link} from 'react-router'

const Todo = ({ onClick, todo, onDeleteClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}>
    {todo.text}
    <Link to={"/todos/" + todo.id + "/edit"}>Edit</Link>
    <button style={{color: "#7650"}}
    onClick={()=>onDeleteClick(todo.id)}
    type="button">delete</button>
    </li>


);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

module.exports= Todo;
