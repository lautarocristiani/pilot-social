import { Box, Skeleton } from '@mui/material';

export const PostDetailSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="text" width="60%" height={60} />
      <Box mt={2}>
        <Skeleton variant="rectangular" height={200} />
      </Box>
      <Box mt={4}>
        <Skeleton variant="text" width="30%" height={40} />
        <Skeleton variant="rectangular" height={100} sx={{ mt: 2 }} />
        <Skeleton variant="rectangular" height={100} sx={{ mt: 2 }} />
      </Box>
    </Box>
  );
};