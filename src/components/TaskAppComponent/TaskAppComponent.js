import React, { Component } from 'react';
import styles from './TaskAppComponent.module.css';

import AllTasks from '../AllTasks/AllTasks';

class TaskAppComponent extends Component{
  constructor(){
    super();
    this.state = {
      btnTextAdd : "Add New Task",
      btnTextReset : "Reset all tasks" , 
      placeholder: "Enter a new task", 
      allTasks: [],
      inputVal: "",
    }
  }

  saveInputText = ( event ) => {
    this.setState({inputVal: event.target.value});
  }
  addNewTask = () =>{
    if( this.state.inputVal == "" )
    {
      console.log( 'Task cannot be empty!' )
      return;
    }
    let mVal = {
      task: this.state.inputVal,
      date: Date(),
    }
    this.setState({ 
          allTasks: [...this.state.allTasks, mVal],
          inputVal : ""
          }) // adding value to the state
    document.getElementById( "input_add_task" ).value = ""          
    alert( 'Task Added' )
  }
  resetTasks = () => {
    let mConfirm = window.confirm( 'Are you sure?/nYou want to reset all the tasks?' );
    if( mConfirm )
      {
        this.setState({ allTasks: [] }) // reset value to the state tasks
      }
      this.forceUpdate();

    alert( 'Tasks reset success!' )

  }
  render(){
    return(
        <div className={styles.TaskAppComponent}>
          <div className="add-new-task">
            <input 
              className={ styles.input_task }
              onChange={ this.saveInputText }
              placeholder={this.state.placeholder }
              id="input_add_task"
            />
            <div className={styles.buttonGroups} >
              <button 
                type="button" 
                onClick={ this.addNewTask }
                className={ styles.add_task }
                >
                { this.state.btnTextAdd }
              </button>

              <button 
                type="button" 
                onClick={ this.resetTasks }
                className={ styles.reset_tasks }
                >
                { this.state.btnTextReset }
              </button>
            </div>
          <AllTasks tasks={this.state.allTasks} ></AllTasks>

          </div>

        </div>
    );
  }
}

export default TaskAppComponent;