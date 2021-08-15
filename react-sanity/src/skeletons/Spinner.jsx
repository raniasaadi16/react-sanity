import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

export default function Spinner() {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='100%' position='fixed'
        component={motion.div} 
        initial={{x: '-100vw'}}
        animate={{x: 0}}
        exit={{x: '100vw'}}
        transition={{duration: 0.5}}>
            <CircularProgress color='secondary'/>
            <Typography variant='h6' color='secondary'>
                Loading.....
            </Typography>
        </Box>
    )
}
