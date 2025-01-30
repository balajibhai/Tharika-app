import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const locations = [
  { allMedia: "All Media" },
  { LastMonthMedia: "Last Month Memory" },
  { joyfulMedia: "Joyful Moments" },
];

type UploadLocationSelectorProps = {
  openContainer: boolean;
  onSelect: (value: string) => void;
  noSelection: () => void;
};

const UploadLocationSelector = (props: UploadLocationSelectorProps) => {
  const [open, setOpen] = React.useState(false);
  const { openContainer, onSelect, noSelection } = props;

  React.useEffect(() => {
    setOpen(openContainer);
  }, [openContainer]);

  const handleListItemClick = React.useCallback(
    (value: string) => {
      onSelect(value);
    },
    [onSelect]
  );

  return (
    <Dialog onClose={noSelection} open={open}>
      <DialogTitle>Select a location to upload</DialogTitle>
      <List sx={{ pt: 0 }}>
        {locations.map((location) => (
          <ListItem disableGutters key={Object.values(location)[0]}>
            <ListItemButton
              onClick={() => handleListItemClick(Object.keys(location)[0])}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={Object.values(location)[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default UploadLocationSelector;
