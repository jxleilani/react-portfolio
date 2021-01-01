import React from 'react'
import { Link } from 'react-scroll'

function LinkScroll({open, setOpen, to, dataText}) {
  return (
    <Link to={to} data-text={dataText} onClick={() => setOpen(!open)}>{dataText}</Link>
  )
}

export default LinkScroll
