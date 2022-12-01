import { IconButton, InputBase, Paper, TextField } from "@mui/material";
import { StretchedBox } from "./stretched-box.component";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        maxWidth: "1000px",
        padding: 2,
        margin: "0 auto",
        display: "flex",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, width: "100%" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
