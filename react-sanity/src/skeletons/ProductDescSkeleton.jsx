import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStyle } from '../style/style';

export default function ProductDescSkeleton() {
    const classes = useStyle();

    return (
        <Box mt={7} px={3}>
            <Grid container spacing={5} >
                <Grid item lg={6}>
                    <Typography variant='h3' color='primary'>
                        <Skeleton className={classes.skeleton}/>
                    </Typography>
                    <Box my={5}>
                        <Typography variant='body1' color='primary'>
                            <Skeleton className={classes.skeleton}/>
                            <Skeleton className={classes.skeleton}/>
                            <Skeleton className={classes.skeleton}/>
                            <Skeleton className={classes.skeleton}/>
                        </Typography>
                    </Box>                 
                </Grid>
                <Grid item lg={6}>
                    <Skeleton variant="rect" width='100%' height='100%' className={classes.skeleton}/>
                </Grid>
            </Grid>
        </Box>
    )
}
