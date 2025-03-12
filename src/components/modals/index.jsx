import React from "react";
import { Box, Typography, Modal, Button } from "@mui/material";

const index = ({ open, onClose, data }) => {
  if (!data) return null;
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 'auto',
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="modal-title" variant="h6">
          {data?.title ? data.title : '---'}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {data.body ? data.body : '---'}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default index;
