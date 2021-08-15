import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';
import { motion } from 'framer-motion';
import { HeaderVar, HeaderTextVar } from '../style/animations';

export default function Header() {
    const classes = useStyle();

    return (
        <div>
            <Box component={motion.div} borderRadius='borderRadius' className={`${classes.img} ${classes.header}`} display='flex' justifyContent="center" alignItems="center" position='relative'
            variants={HeaderVar} 
            initial='hidden' 
            animate='visible'>
                <Box component={motion.div} variants={HeaderTextVar}>
                    <Typography variant='h3' className={classes.bgText} align='center'>
                        We shape the future of design.
                    </Typography>
                    <Typography variant='h6' className={classes.textWhite} align='center'>
                        <Box fontWeight="fontWeightMedium" pt={3} mx='auto' width="75%">
                            Our design services starts and ends with a best-in-class experience strategy that builds brands.
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}
