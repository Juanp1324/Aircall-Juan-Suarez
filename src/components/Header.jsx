import React from 'react';


const Header = (props) => {
  function displayActivity() {
    props.setShouldShow(true)
  }
  function displayArchived() {
    props.setShouldShow(false)
  }
  return (
    <header>
      <button className={props.shouldShow === true ? "buttonHeader left on" : "buttonHeader left"} onClick={displayActivity}><span>Activity</span></button>
      <button className={props.shouldShow === false ? "buttonHeader on" : "buttonHeader"} onClick={displayArchived}><span>Archived</span></button>
    </header>
  );
};

export default Header;
