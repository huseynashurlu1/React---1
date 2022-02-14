import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <div className='navbar'>
        <h1>{props.title}</h1>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "No Data Found"
}
export default Navbar;