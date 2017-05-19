import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions';

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = { };
    this.state.todoText = props.todo.text;
  }

  render(){
    return (
      <div>
        <h3>{this.props.params.id}</h3>
        <input type="text" value={this.state.todoText} onChange={(e)=>{this.setState({todoText: e.target.value})}}/>
        <button type="submit" onClick={(e)=>{this.props.editTodo(this.props.todo.id, this.state.todoText)}}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const todoId = ownProps.params.id

  const todo = state.todos.filter((td)=>{return (td.id == todoId)})[0] || {};

  return {
    todo
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editTodo: (id, text) => {
      dispatch(editTodo(id, text))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Edit);
