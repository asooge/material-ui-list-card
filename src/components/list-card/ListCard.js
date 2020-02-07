import React, { Component } from 'react';
import classNames from 'classnames';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

import './ListCard.scss'

class ListCard extends Component {
  
  render() {
    const { header, items, theme } = this.props
    const classes = classNames('ui-list-card', theme)

    return (
      <Base className={classes} >
        <header>{header}</header>
        <ul>
          {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </Base>
    );
  }
}

ListCard.propTypes = {
  header: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.oneOf(['light', 'dark'])
};

ListCard.defaultProps = {
  header: "Header",
  items: ['Item 1', 'Item 2', 'Item 3'],
  theme: 'light'
};

export default ListCard;
