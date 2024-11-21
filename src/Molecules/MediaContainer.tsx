import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import DialogContent from "@mui/material/DialogContent";
import { ClickHandlerContext } from "../Context";
import MediaDisplay from "./MediaDisplay";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type MediaContainerProps = {
  showMediaContainer: boolean;
  onClose: () => void;
  title: string;
};

const MediaContainer: React.FC<MediaContainerProps> = ({
  showMediaContainer,
  onClose,
  title,
}) => {
  const { mediaList, setUploadMediaList } =
    React.useContext(ClickHandlerContext);
  const [open, setOpen] = React.useState(showMediaContainer);

  React.useEffect(() => {
    setOpen(showMediaContainer);
  }, [showMediaContainer]);

  const handleDialogClose = (
    event: object,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return;
    }
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleDialogClose}
        TransitionComponent={Transition}
        disableEscapeKeyDown
        PaperProps={{
          onClick: (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
          },
        }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <MediaDisplay
            listOfMedia={mediaList}
            sectionName=""
            setMediaList={setUploadMediaList}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default MediaContainer;
