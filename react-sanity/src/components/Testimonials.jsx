import { useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useStyle } from '../style/style';
import Carousel from 'react-multi-carousel';
import { responsiveTestimonials } from '../style/carouselResponsive';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { Title, TitleGr, ReviewText1, ReviewText2, ReviewContent, ReviewImg } from '../style/animations';

export default function Testimonials({reviews}) {
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
        <Box mt={5} className={classes.overflow} id='testimonials'>
            <Box
            component={motion.div} 
            variants={TitleGr} 
            animate={animation}>
                <Box fontWeight="fontWeightBold">
                    <Typography className={classes.bigText} align='center'>
                        Testimonials
                    </Typography>
                </Box>
                <Box mt={-7}
                component={motion.div} 
                variants={Title} 
                animate={animation}>
                    <Typography variant='h3' className={classes.bgText} align='center'>
                        Testimonials
                    </Typography>
                </Box>
            </Box>
            <Box mt={7} ref={ref}>
                <Carousel responsive={responsiveTestimonials}>
                    {reviews.map(review => (
                        <Box width='80%' mx='auto' key={review._id}>
                            <Box
                            component={motion.div} 
                            variants={ReviewContent} 
                            animate={animation}>
                                <Typography variant='body1' color='primary' align='center'>
                                    {review.content}
                                </Typography>
                            </Box>
                            <Box display='flex' justifyContent='center' mt={5}
                            component={motion.div} 
                            variants={ReviewImg} 
                            animate={animation}>
                                <img src={review.clientImage.asset.url} alt="" className={classes.reviewImg}/>
                            </Box>
                            <Box mt={1}>
                                <Box
                                component={motion.div} 
                                variants={ReviewText1} 
                                animate={animation}>
                                    <Typography gutterBottom variant="h6" component="h2" color='primary' align='center'
                                    >
                                        {review.client}
                                    </Typography>
                                </Box>
                                <Box
                                component={motion.div} 
                                variants={ReviewText2} 
                                animate={animation}>
                                    <Typography variant="body2" color="primary" component="p" align='center'>
                                        {review.clientJob}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                    
                    
                </Carousel>
            </Box>
        </Box>
    )
}
