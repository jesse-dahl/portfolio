import React from 'react';


const HeaderTitle = (props) => {

  return (
    <div className='title-wrapper' style={{ paddingTop: 40 }}>
      <div className='title'>
        <h2
          className='main-title'
          style={{
            color: props.color,
            margin: 0,
            fontSize: 45,
            textAlign: "center"
          }}
        >⌈ &nbsp;&nbsp; {props.title} &nbsp;&nbsp; ⌋ </h2>
      </div>
    </div>
  );
}

export default HeaderTitle;