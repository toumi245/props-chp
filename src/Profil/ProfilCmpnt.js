import React from "react";
import PropTypes from "prop-types";
import {Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Pro =({fullName, bio, profession,children,handleName}) =>{
    const styleobject={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color:'blue'
       
    };
    const style2={
    width: "150px",
    height: "150px", 
    borderRadius: "50%",
    };
    return (
       
        <div style={styleobject}>
        {React.cloneElement(children, { style: style2})}
            <div>
            <h3>{fullName}</h3>
      <p>{bio}</p>
      <p>{profession}</p>
      <Button variant="primary" onClick={() => handleName(fullName)}>click!</Button>{' '}
        </div> 
    </div>
    )
}
Pro.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };
export default Pro;