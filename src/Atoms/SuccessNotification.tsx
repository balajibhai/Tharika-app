import React, { useCallback, useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

type SuccessNotificationProps = {
  onNotificationClose: () => void;
  showSuccessNotification: boolean;
};

const SuccessNotification = (props: SuccessNotificationProps) => {
  const { onNotificationClose, showSuccessNotification } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showSuccessNotification);
  }, [showSuccessNotification]);

  // Close the Snackbar
  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
      onNotificationClose();
    },
    [onNotificationClose]
  );

  return (
    <div>
      {/* Snackbar Component */}
      <Snackbar
        open={open}
        autoHideDuration={3000} // Toast disappears after 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position of the toast
      >
        {/* Alert inside the Snackbar */}
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Successfully Uploaded!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SuccessNotification;
