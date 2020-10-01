import React, { Component } from 'react';
import styles from './AllTasks.module.css';

import SingleTask from '../SingleTask/SingleTask';

class AllTasks extends Component {
  constructor( props ){
    super( props );
    this.states = {
    }
  }
  nTasks = null;

  render(){
    if( Array.isArray( this.props.tasks ) && this.props.tasks.length > 0  )
    { 
      this.nTasks = (
        <div>
          {
            this.props.tasks
                    // .reverse()
                    .map( (task, index)  => {

              return (
                    <SingleTask 
                        index={ index }
                        task={ task.task } 
                        key={ index } 
                        date={ task.date }
                        status={ task.status }
                        deleteAction = { this.props.deleteAction }
                        completedAction = { this.props.completedAction }
                        >
                        </SingleTask>
                    )              
            })
          }


        </div>
      );
    }

    return (      
      <div className={styles.AllTasks} >
        { this.nTasks }
      </div>
    );
  }
}

export default AllTasks;
