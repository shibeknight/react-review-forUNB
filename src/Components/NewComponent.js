import React from 'react'

const NewComponent = (props) => {
  return (
    <div>
        This is new component
        {props.children}
    </div>
  )
}

export default NewComponent