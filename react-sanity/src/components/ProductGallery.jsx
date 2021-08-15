import { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';
import Masonry from 'react-masonry-css';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { GalleryVar, ProductDescImg, ProductDescText, TitleGr } from '../style/animations';
import { responsiveGallery } from '../style/carouselResponsive';

export default function ProductGallery({gallery}) {
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
        <Box mt={16} px={3} ref={ref}>
            <Box
            component={motion.div}
            variants={TitleGr}
            animate={animation}>
                <Typography gutterBottom variant='h5' className={classes.bgText}>
                    Product Galery
                </Typography>
            </Box>
            <Masonry breakpointCols={responsiveGallery}
                className={classes.myMasonrygrid}
                columnClassName={classes.myMasonryGrid_column}>
                    {gallery.map((image,i) => (
                        <Box key={i} borderRadius='borderRadius'
                        component={motion.div}
                        variants={GalleryVar}
                        animate={animation}>
                            <img src={image.asset.url} alt="" style={{width: '100%'}}/>
                        </Box>
                    ))}
            </Masonry>
        </Box>
    )
}
