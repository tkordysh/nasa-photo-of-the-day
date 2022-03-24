import React from "react";


const Photo = (props) => {

    return(
        <img src={props.data.url}></img>
    )
}

export default Photo