import React from "react";
import axios from "axios";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ArchiveIcon from '@mui/icons-material/Archive';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

const ActivityFeed= (props) => {

  async function archive(id) {
    try {
      await axios.post("https://aircall-job.herokuapp.com/activities/" + id, {
        is_archived: true
      })
      props.setShouldRefetch((prevValue) => !prevValue)
    }
    catch(e){
      alert(e.message)
    }
  }

  function showInfo(id) {
    const infoDetails = props.data.find(messages => messages.id === id)
    props.setActivityDetail(infoDetails)
  }
  

  return(props.shouldShow && (
    <div className="body">
      <h1>Recent Calls</h1>
      {!props.data && <div className = 'loading'>A moment please...</div>}
          {props.data &&
            props.data.filter(message => message.is_archived === false).map(filteredData => (
              <div className="feedContainer" key={filteredData.id}>
                {filteredData.direction === 'outbound' ? <div className="item-a"><PhoneCallbackIcon/></div>:<div className="item-a"><CallMadeIcon/></div>}
                <div className="item-b"><span>{filteredData.from}</span>
                <br></br>
                called {filteredData.to ? 
                <span> {filteredData.to}</span>:
                <span>Unknown</span>}</div> 
                <div className="item-c">{ (new Date(filteredData.created_at)).toLocaleDateString([], {month: '2-digit', day: '2-digit',}) }
                &nbsp;at { (new Date(filteredData.created_at)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit',}) }</div>
                <IconButton className='item-d' onClick={() => {props.setOpen(true); showInfo(filteredData.id);}}><InfoIcon style={{ color: 'white', fontSize: '16px'}}/></IconButton>
                <IconButton className='item-e' onClick={() => archive(filteredData.id)}><ArchiveIcon style={{ color: 'white', fontSize: '17px' }}/></IconButton>
                
                
                <br></br>
              </div>
          ))}
    </div>
  ));
};

export default ActivityFeed;
