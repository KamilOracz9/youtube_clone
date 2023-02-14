import { Stack, Box } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './';
import useMediaQuery from '@mui/material/useMediaQuery';

const Videos = ({ videos, direction }) => {
    if(!videos?.length) return 'Loading...';

    return (
        <Stack 
            direction={direction || "row"} flexWrap="wrap" justifyContent={"start"} gap={2}
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                '@media (max-width: 890px)': {
                    gridTemplateColumns: direction && 'repeat(2, 1fr)',
                },
                '@media (max-width: 600px)': {
                    gridTemplateColumns: direction && 'repeat(1, 1fr)',
                },
                '@media (min-width: 774px)': {
                    gridTemplateColumns: !direction && 'repeat(2, 1fr)',
                },
                '@media (min-width: 1260px)': {
                    gridTemplateColumns: !direction && 'repeat(3, 1fr)',
                },
                '@media (min-width: 1560px)': {
                    gridTemplateColumns: !direction && 'repeat(4, 1fr)',
                },
                gap: 2
            }}
        >
            {videos.map((item, index) => (
                <Box key={index}
                    sx={{
                        width: '100%',
                    }}
                >
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos