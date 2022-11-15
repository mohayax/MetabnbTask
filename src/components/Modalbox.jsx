import React from 'react';

import './ModalBox.css';

const Modalbox = ({logo, name, icon }) => {
  return (
      <div className="modalItem">
        <div>
             <img src={logo} alt="logo" />
             <span id='span'>{name}</span>
        </div>
        <div>
            <img src={icon} alt="arrow_icon" />
        </div>
    </div>
  )
}

export default Modalbox