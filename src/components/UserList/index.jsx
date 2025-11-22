import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchModel("/api/user/list").then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Typography variant="h6">Danh sách người dùng</Typography>

      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem>
              <Link
                to={`/users/${user._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                />
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
