import { TextField, Paper } from "@mui/material";
import { styled } from "@mui/system";

const NoteContainer = styled(Paper)(({ theme }) => ({
  width: "270px",
  maxWidth: "400px",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "#fff6c5", // Light yellow note style
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: "5px",
  },
});

interface NoteProps {
  title: string;
  description: string;
  onChange: (field: "title" | "description", value: string) => void;
}

const Note = (props: NoteProps) => {
  const { title, description, onChange } = props;
  return (
    <NoteContainer elevation={3}>
      <StyledTextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => onChange("title", e.target.value)}
      />
      <StyledTextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        minRows={3}
        value={description}
        onChange={(e) => onChange("description", e.target.value)}
      />
    </NoteContainer>
  );
};

export default Note;
