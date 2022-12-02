import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";
import { getRanking } from "../services/quiz.service";
import { User } from "../types/quiz.types";
import { StretchedBox } from "./stretched-box.component";

export const LeaderBoard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const auth = useAuth();

  useEffect(() => {
    if (auth.accessToken && auth.idToken) {
      fetch();
    }
  }, [auth]);

  const fetch = async () => {
    const res = await getRanking(auth);
    setUsers(res as unknown as User[]);
  };

  const ghosts = [
    {
      given_name: "John Doe",
      picture: "https://cataas.com/cat",
    },
    {
      given_name: "John Doe",
      picture: "https://cataas.com/cat",
    },
    {
      given_name: "John Doe",
      picture: "https://cataas.com/cat",
    },
    {
      given_name: "John Doe",
      picture: "https://cataas.com/cat",
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
        {users
          ? users.slice(0, 3).map((user, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar src={user.picture} variant="rounded" />
                </ListItemAvatar>
                <ListItemText
                  primary={`#${i + 1}`}
                  secondary={user.given_name}
                />
              </ListItem>
            ))
          : ghosts.map((user, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar src={user.picture} variant="rounded" />
                </ListItemAvatar>
                <ListItemText
                  primary={`#${i + 1}`}
                  secondary={user.given_name}
                />
              </ListItem>
            ))}
      </List>
    </StretchedBox>
  );
};
