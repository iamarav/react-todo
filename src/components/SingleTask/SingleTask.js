import React, { Component } from 'react';
import styles from './SingleTask.module.css';

class SingleTask extends Component {
  constructor( props ){
    super( props );
    this.states = {
    }
  }
  render(){
    let markAsCompletedButton = this.props.status !== "Completed" ? 
      ( 
        <>
        &nbsp;
          <button 
                className = { styles.mark_completed_button }
                onClick={() => this.props.completedAction( this.props.index )}>
              Mark as Completed
          </button>
        </>
      ) : null;
    return(
      <div className={styles.SingleTask}>
        <span className={ styles.detail_task } >
          { this.props.task }
        </span>
        <hr />
        <span className={ styles.date_task } >
          { this.props.date } - <strong>{ this.props.status }</strong>
        </span>
        &nbsp;
        <button 
              className = { styles.delete_task_button }
              onClick={() => this.props.deleteAction( this.props.index )}>
            Delete
        </button>
        { markAsCompletedButton }
        
      </div>
    );
  }
}

export default SingleTask;
