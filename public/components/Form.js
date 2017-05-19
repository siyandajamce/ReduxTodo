import React from "react";
import Todo from "./Todo";
const Form = React.createClass({

  componentDidMount: function(){
    this.refs["input"].addEventListener("keyup", (e)=>{
      if(e.keyCode === 13){
        this.addTodo();
      }
    });
  },

  getInitialState: function(){
    return{
      value: ""
    }
  },

  valueOnChange: function(e){
    this.setState({ value: e.target.value });
  },

  addTodo: function(){
    const value = this.state.value;
    if(value) this.props.addTodo(value);
    this.setState({ value: "" });
  }

  deleteTodo: function(onDeleteClick){
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  },

  render: function() {

    return(
      <div className="form grid">
        <input
          autoFocus={true}
          ref="input"
          type="text"
          onChange={this.valueOnChange}
          value={this.state.value} placeholder="Add new"/>
        <button type="button" onClick={this.addTodo}>&#10010;</button>
      </div>
    )
  }
});

module.exports = Form;
