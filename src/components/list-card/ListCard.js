import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  base: {
    width: '328px',
    border: '1px solid #000000',
    borderRadius: '10px'
  },

  listContainer: {
    minHeight: '320px',
    fontSize: '24px',
    color: '#OCOCOC',
    margin: '20px'
  },

  listItem: {
    marginBottom: '10px'
  },
  
  header: {
    display: 'flex',
    fontSize: '36px',
    color: '#0C0C0C',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    height: '105px'
  }
}

class ListCard extends Component {

  render() {
    return (
      <Base style={styles.base}>
        <header style={styles.header}>Header</header>
        
        <ul style={styles.listContainer}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
};

export default ListCard;
