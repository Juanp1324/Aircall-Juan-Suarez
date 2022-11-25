import React from "react";
import 'regenerator-runtime/runtime'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const ActivityDetail= (props) => {

  const handleClose = () => {
    props.setOpen(false);
  };
 

  return(props.activityDetail &&

      (<Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "300px",
                height: "100%",
                maxHeight: "220px",
              },
            },
          }}
      >
        <DialogTitle><b>{"Call Details"}</b></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className = 'details' key={props.activityDetail.id}>
              {props.activityDetail.direction.charAt(0).toUpperCase() + props.activityDetail.direction.slice(1)} from {props.activityDetail.from} to&nbsp;
              {props.activityDetail.to ? <span>{props.activityDetail.to}</span>:<span>Unknown</span>}
              <div className = 'detailsDate'><b>{props.activityDetail.call_type.charAt(0).toUpperCase() + props.activityDetail.call_type.slice(1)}</b> on { (new Date(props.activityDetail.created_at)).toLocaleDateString()} at { (new Date(props.activityDetail.created_at)).toLocaleTimeString()}</div>
              <div className = 'detailsVia'>Lasted {parseInt(props.activityDetail.duration) / 60} {parseInt(props.activityDetail.duration) / 60 === 1 ? 'minute' : 'minutes'} via {props.activityDetail.via}</div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{height: '25px'}}>Close</Button>
        </DialogActions>
      </Dialog>
  ))
};

export default ActivityDetail;
