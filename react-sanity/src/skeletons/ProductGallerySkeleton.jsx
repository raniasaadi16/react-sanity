import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStyle } from '../style/style';

export default function ProductGallerySkeleton() {
    const classes = useStyle();

    return (
        <Box mt={16} px={3}>
            <Typography gutterBottom variant='h5'>
                <Skeleton className={classes.skeleton}/>
            </Typography>
            <Grid container spacing={3}>
                <Grid item lg={4} sm={6} xs={12}>
                    <Skeleton variant='rect' width='100%' height={300} className={classes.skeleton}/>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Skeleton variant='rect' width='100%' height={300} className={classes.skeleton}/>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Skeleton variant='rect' width='100%' height={300} className={classes.skeleton}/>
                </Grid>
            </Grid>
        </Box>
    )
}
