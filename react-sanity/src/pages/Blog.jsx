import { useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@material-ui/core';
import { useStyle } from '../style/style';
import { motion } from 'framer-motion';
import { RoutingVar, Title } from '../style/animations';
import { useSelector, useDispatch } from 'react-redux';
import { getAllblogs } from '../redux/ducks/Blog';
import BlogCard from '../components/BlogCard';

export default function Blog() {
    const classes = useStyle();
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog.blogs);

    useEffect(() => {
        dispatch(getAllblogs(''));
    }, [])

    return (
        <motion.div className={`${classes.overflow} ${classes.header}`}
        variants={RoutingVar}
        exit='exit'>
            <Box mb={5}
            component={motion.div}
            variants={RoutingVar}
            initial='hidden'
            animate='visible'
            >
                <Box py={12} display='flex' justifyContent='center' alignItems='center' className={classes.blogBg}> 
                    <Box
                    component={motion.div}
                    variants={Title}
                    initial='hidden'
                    animate='visible'>
                        <Typography variant='h4' className={classes.textWhite}>
                            Blog
                        </Typography>
                    </Box>
                </Box>  
                <Container>
                    <Box mt={9} mx={3}>
                        <Grid container spacing={3}>
                            {blogs.map(blog => (
                                <Grid item key={blog._id} md={4} sm={6} xs={12}>
                                    <BlogCard blog={blog}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </motion.div>
    )
}
