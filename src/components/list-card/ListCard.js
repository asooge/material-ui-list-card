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
    const { header, items } = this.props
    
    return (
      <Base style={styles.base}>
        <header style={styles.header}>{header}</header>
        
        <ul style={styles.listContainer}>
          {items.map((item, index) => (<li key={index}>{item}</li>))}
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
  header: "Header",
  items: ['Item 1', 'Item 2', 'Item 3']
};

export default ListCard;
