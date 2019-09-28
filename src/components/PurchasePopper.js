import React from 'react';
import { Popover, Typography, TextField, Paper, Button } from '@material-ui/core';

const purchasePopper = ({
  open,
  classes,
  anchorEl,
  phoneNumber,
  handleClose,
  handlePhoneNumberChange,
  handlePhoneNumberVerification,
}) => (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
    >
      <Paper className={classes.purchasePopper}>
        <TextField
          id="standard-name"
          label="Phone Number"
          className={classes.phoneNumberField}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary" 
          className={classes.verifyButton}
          onClick={handlePhoneNumberVerification}
        >
          Verify
      </Button>
      </Paper>
    </Popover>
  )

export default purchasePopper;