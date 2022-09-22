import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export default function Input(props) {
  return (
    <Box sx={{ width: "80vw" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          props.search(e.target.value);
        }}
      />
    </Box>
  );
}
