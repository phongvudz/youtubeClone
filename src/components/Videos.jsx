import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";
const Videos = ({ videos }) => {
  if (!videos) return <Loader />;

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((video, idx) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}{" "}
          {video?.id?.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
