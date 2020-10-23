import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  search, 
  onSubmit,
  onChange
}) => (
  <>
    <label htmlFor="search"></label>
    
    <input 
      id="search"
      type="text"
      name="search"
      value={search}
      onChange={onChange}
    />

    <button onSubmit={onSubmit}>
        Send
    </button>

    <label htmlFor="get">GET</label>
    <input 
      id="get"
      type="text"
      name="get"
      value="get"
      onChange={onChange}
    />GET
    <input 
      id="post"
      type="text"
      name="post"
      value="post"
      onChange={onChange}
    />POST
    <input 
      id="put"
      type="text"
      name="put"
      value="put"
      onChange={onChange}
    />PUT
    <input 
      id="delete"
      type="text"
      name="delete"
      value="delete"
      onChange={onChange}
    />DELETE
  </>
);

Controls.PropTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired
};

export default Controls;

