import { useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import { Typography, Box, Container } from '@material-ui/core';
import { useStyle } from '../style/style';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../redux/ducks/Project';
import ProductDescSkeleton from '../skeletons/ProductDescSkeleton';
import ProductGallerySkeleton from '../skeletons/ProductGallerySkeleton';
import { motion } from 'framer-motion';
import { RoutingVar, Title } from '../style/animations';

const ProductDesc = lazy(() => import('../components/ProductDesc'));
const ProductGallery = lazy(() => import('../components/ProductGallery'));


export default function SinglePortfolio() {
    const classes = useStyle();
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProject = useSelector(state => state.project.singleProject);

    useEffect(() => {
        dispatch(getProject(id));
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
          <Box py={12} display='flex' justifyContent='center' alignItems='center' className={classes.portfolio}> 
            <Box
            component={motion.div}
            variants={Title}
            initial='hidden'
            animate='visible'>
              <Typography variant='h4' className={classes.textWhite}>
                  Portfolio
              </Typography>
            </Box>
          </Box>
          <Container>
            <Suspense fallback={<ProductDescSkeleton/>}>
                <ProductDesc singleProject={singleProject}/>
            </Suspense>
            <Suspense fallback={<ProductGallerySkeleton/>}>
                {singleProject.map(project => <ProductGallery key={project._id} gallery={project.gallery}/>)}
            </Suspense>          
          </Container>
        </Box>
      </motion.div>
    )
}
