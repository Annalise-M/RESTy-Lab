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

    <input 
      id="get"
      type="radio"
      name="method"
      value="get"
      onChange={onChange}
    />GET
    <input 
      id="post"
      type="radio"
      name="method"
      value="post"
      onChange={onChange}
    />POST
    <input 
      id="put"
      type="radio"
      name="method"
      value="put"
      onChange={onChange}
    />PUT
    <input 
      id="delete"
      type="radio"
      name="method"
      value="delete"
      onChange={onChange}
    />DELETE
  </>
);

Controls.propTypes = {
  search: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
