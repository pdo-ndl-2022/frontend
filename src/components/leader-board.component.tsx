import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { StretchedBox } from "./stretched-box.component";

export const LeaderBoard = () => {
  const users = [
    {
      name: "John Doe",
      avatar: "https://cataas.com/cat",
    },
    {
      name: "John Doe",
      avatar: "https://cataas.com/cat",
    },
    {
      name: "John Doe",
      avatar: "https://cataas.com/cat",
    },
    {
      name: "John Doe",
      avatar: "https://cataas.com/cat",
    },
  ];

  return (
    <StretchedBox
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Typography variant="h4">Leader Board</Typography>
      <Typography variant="caption">The four first users of sido</Typography>
      <List>
        {users.map((user, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar src={user.avatar} variant="rounded" />
            </ListItemAvatar>
            <ListItemText primary={`#${i + 1}`} secondary={user.name} />
          </ListItem>
        ))}
      </List>
    </StretchedBox>
  );
};
