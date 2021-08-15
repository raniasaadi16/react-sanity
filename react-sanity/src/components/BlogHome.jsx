import { useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useStyle } from '../style/style';
import BlogCard from './BlogCard';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { Title, TitleGr, BlogHomeVar } from '../style/animations';
import { Link } from 'react-router-dom';

export default function BlogHome({blogs}) {
    const classes = useStyle();
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start('visible')
        }
        if(!inView){
            animation.start('hidden')
        }
    }, [inView])
    

    return (
        <Box mt={5} className={classes.overflow}>
            <Box
            component={motion.div} 
            variants={TitleGr} 
            animate={animation}>
                <Box fontWeight="fontWeightBold">
                    <Typography className={classes.bigText}>
                        Our Blog
                    </Typography>
                </Box>
                <Box mt={-7}
                component={motion.div} 
                variants={Title} 
                animate={animation}>
                    <Typography variant='h3' className={classes.bgText}>
                        Our Blog
                    </Typography>
                </Box>
            </Box>
            <Grid container spacing={4} ref={ref}
            component={motion.div} 
            variants={BlogHomeVar} 
            animate={animation}>
                {blogs.map(blog => (
                    <Grid item md={4} xs={12} sm={6} key={blog._id}>
                        <BlogCard blog={blog}/>
                    </Grid>
                ))}
            </Grid>
            <Box mt={3}>
                <Typography variant='h6'>
                    <Button color='secondary' endIcon={<ArrowForwardIcon/>} size='large'>
                        <Link to='/blog' className={classes.linkSec}>
                            See All 
                        </Link>
                    </Button>
                </Typography>                  
            </Box>
        </Box>
    )
}
