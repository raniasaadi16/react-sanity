import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';

export default function AboutSkeleton() {
    const classes = useStyle();

    return (
        <Box mt={3}>
            <Box mx='auto' width='50%'>
                <Typography variant='h3'>
                    <Skeleton className={classes.skeleton} />
                </Typography>
            </Box>
            <Box mt={8}>
                <Grid container spacing={1}>
                    <Grid item lg={6} >
                        <Skeleton variant="rect" width='100%' height={300} className={classes.skeleton}  />
                    </Grid>
                    <Grid item lg={6}>                           
                        <Skeleton variant="rect" width='100%' height={300} className={classes.skeleton} /> 
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
