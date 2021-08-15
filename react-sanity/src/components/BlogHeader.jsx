import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';
import { motion } from 'framer-motion';
import { Title } from '../style/animations';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Moment from 'moment';

export default function BlogComp({blog}) {
    const classes = useStyle();

    return (
        <Box py={9} display='flex' justifyContent='center' alignItems='center' className={classes.blogBg} style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${blog.mainImage.asset.url})`}}> 
                <Box
                component={motion.div}
                variants={Title}
                initial='hidden'
                animate='visible'>
                    <Typography variant='h4' className={classes.bgText} align='center'>
                        {blog.title}
                    </Typography>
                    <Box mt={7} display='flex' justifyContent='center'>
                        <Box display='flex' alignItems='center'>
                            <AccessTimeIcon className={classes.textWhite}/>
                           <Box ml={1} mr={3}>
                                <Typography variant='body1' className={classes.textWhite}>
                                    {Moment(blog.publishedAt).format('MMMM Do YYYY')}
                                </Typography>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <AccountCircleIcon className={classes.textWhite}/>
                           <Box ml={1} mr={3}>
                                <Typography variant='body1' className={classes.textWhite}>
                                    {blog.team.name}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
        </Box>
            
    )
}
