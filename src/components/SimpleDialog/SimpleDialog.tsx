import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import * as React from "react";

export type SimpleDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const SimpleDialog = ({ open, onClose }: SimpleDialogProps) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Example Dialog</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Here is an example dialog/modal component
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
