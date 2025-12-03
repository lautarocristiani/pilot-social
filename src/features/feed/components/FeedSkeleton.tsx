import { Grid, Skeleton, Card, CardContent, Box } from '@mui/material';

export const FeedSkeleton = () => {
  return (
    <Grid container spacing={3}>
      {Array.from(new Array(6)).map((_, index) => (
        <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
          <Card sx={{ height: 300 }}>
            <CardContent>
              <Box mb={2}><Skeleton width="30%" /></Box>
              <Skeleton variant="text" height={40} width="80%" />
              <Skeleton variant="text" height={40} width="60%" />
              <Box mt={2}>
                <Skeleton variant="rectangular" height={100} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};