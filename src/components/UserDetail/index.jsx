import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetchModel(`/api/user/${userId}`).then((data) => setUser(data));
  }, [userId]);

  if (!user) return <Typography>Đang tải...</Typography>;

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography>Nghề nghiệp: {user.occupation}</Typography>
      <Typography>Địa điểm: {user.location}</Typography>
      <Typography>Mô tả: {user.description}</Typography>

      <Box mt={2}>
        <Link to={`/photos/${user._id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained">Xem ảnh của người dùng này</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default UserDetail;
