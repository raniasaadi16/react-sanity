import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useStyle } from '../style/style';

export default function NavbarSkeletom() {
    const classes = useStyle();

    return (
            <AppBar elevation={0} color='inherit' position='relative'>
            <Toolbar className={classes.flex} disableGutters={true}>
                <Skeleton variant="circle" width={40} height={40} className={classes.skeleton} />
                <Skeleton variant="text" width='50%' className={classes.skeleton} />
            </Toolbar>
        </AppBar>
    )
}
