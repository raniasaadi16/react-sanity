import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { useStyle } from '../style';
import Skeleton from '@material-ui/lab/Skeleton';

export default function TeamSkeleton() {
    const classes = useStyle();
    const items = [1,2,3];
    return (
        <Box mt={7} py={8} pl={5} className={classes.team}>
            <Grid container alignItems='center' >
                <Grid item lg={4}>
                    <Box width='50%'>
                        <Typography variant='h3' color='primary'>
                            Our Team
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={8}>
                        {items.map((item,i) => <Skeleton variant='rect' key={i} />)}
                </Grid>
            </Grid>
        </Box>
    )
}
