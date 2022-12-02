import { IconButton, InputBase, Paper, styled, TextField } from "@mui/material";
import { StretchedBox } from "./stretched-box.component";
import SearchIcon from "@mui/icons-material/Search";

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: "1000px",
  padding: theme.spacing(2),
  margin: "0 auto",
  display: "flex",
  "&:hover": {
    outline: `solid 2px ${theme.palette.primary.main}`,
  },
}));

export const SearchBar = () => {
  return (
    <StyledPaper variant="outlined">
      <InputBase
        sx={{ ml: 1, flex: 1, width: "100%" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </StyledPaper>
  );
};
