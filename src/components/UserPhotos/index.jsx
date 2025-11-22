import React from "react";
import { Typography, Box } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    fetchModel(`/api/photo/${userId}`).then((data) => setPhotos(data));
  }, [userId]);

  if (!photos.length)
    return <Typography>Không có ảnh hoặc đang tải...</Typography>;

  return (
    <Box p={2}>
      {photos.map((photo) => (
        <Box key={photo._id} mb={4}>
          {/* HIỂN THỊ ẢNH */}
          <img
            src={`/images/${photo.file_name}`}
            alt={photo.file_name}
            className="user-photo"
          />

          {/* NGÀY */}
          <Typography variant="caption" display="block">
            {new Date(photo.date_time).toLocaleString()}
          </Typography>

          {/* COMMENT */}
          <Box mt={1}>
            {photo.comments.length === 0 ? (
              <Typography
                variant="body2"
                ml={2}
                color="text.secondary"
                style={{ fontStyle: "italic" }}
              >
                (Không có comment nào.)
              </Typography>
            ) : (
              photo.comments.map((c) => (
                <Box key={c._id} ml={2} mb={1}>
                  <Typography variant="body2">
                    {c.user ? (
                      <Link to={`/users/${c.user._id}`}>
                        {c.user.first_name} {c.user.last_name}
                      </Link>
                    ) : (
                      <span style={{ color: "gray" }}>Unknown user</span>
                    )}
                    : {c.comment}
                  </Typography>

                  <Typography variant="caption">
                    {new Date(c.date_time).toLocaleString()}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default UserPhotos;
