import React from 'react'

const Catagory = (props) => {
  return (
    <React.Fragment>
        <div className='cat-container'>
            <img src={props.imgrc}></img>
            
        </div>
    </React.Fragment>
  )
}

export default Catagory
