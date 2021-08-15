import { useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import { Box, Container, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../redux/ducks/Blog';
import { motion } from 'framer-motion';
import { RoutingVar } from '../style/animations';
import Spinner from '../skeletons/Spinner';

const BlogHeader = lazy(() => import('../components/BlogHeader'));

export default function SingleBlog() {
    const classes = useStyle();
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleBlog = useSelector(state => state.blog.singleBlog);

    useEffect(() => {
        dispatch(getBlog(id));
    }, []);
    return (
        <motion.div className={`${classes.overflow} ${classes.header}`}
        variants={RoutingVar}
        exit='exit'>
            <Box
            variants={RoutingVar}
            initial='hidden'
            animate='visible' 
            >
            <Suspense fallback={<Spinner/>}>
                {singleBlog.map(blog => (
                    <Box>
                        <BlogHeader blog={blog} key={blog}/>
                        <Container>
                            <Box mt={12} mx={3} my={3}>
                                <Typography variant='body1' color='primary'>
                                    {blog.body}
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                ))}
            </Suspense>
                
            </Box>
        </motion.div>
    )
}
