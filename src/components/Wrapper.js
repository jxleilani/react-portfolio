import React from 'react'

function Wrapper(props) {
  return (
    <div className={props.open ? "wrapper open" : "wrapper"} {...props}></div>
  )
}

export default Wrapper
