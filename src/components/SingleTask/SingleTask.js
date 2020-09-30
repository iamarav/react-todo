import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SingleTask.module.css';

class SingleTask extends Component {
  constructor( props ){
    super( props );
    this.states = {
    }
  }
  render(){
    return(
      <div className={styles.SingleTask}>
        <span className={ styles.detail_task } >
          { this.props.task }
        </span>
        <hr />
        <span className={ styles.date_task } >
          { this.props.date }
        </span>
      </div>
    );
  }
}

export default SingleTask;
