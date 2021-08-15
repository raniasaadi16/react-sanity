import { useEffect } from 'react';
import { Typography, Box, Grid, Link } from '@material-ui/core';
import  FacebookIcon  from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { useStyle } from '../style/style';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { cardHover, AboutText, AboutImg, Title, TitleGr } from '../style/animations';

export default function About() {
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
        <Box mt={3} className={classes.overflow} id='about'>
           <Box
           component={motion.div}
           variants={TitleGr}
           animate={animation}>
                <Box fontWeight="fontWeightBold">
                    <Typography className={classes.bigText} align='center'>
                        About Us
                    </Typography>
                </Box>
                <Box mt={-7}
                component={motion.div}
                variants={Title}
                animate={animation}
                >
                    <Typography variant='h3' className={classes.bgText} align='center'>
                        About Us
                    </Typography>
                </Box>
           </Box>
           
            <Box mt={8} ref={ref} component={motion.div} 
            variants={cardHover} 
            aniamte={animation}>
                <Grid container spacing={1} className={classes.overflow}>
                    <Grid item lg={6} >
                        <Box display='flex' justifyContent='center'>
                            <Box width='45%' height='293px' mx={1} mt={5}
                            component={motion.div}
                            variants={AboutImg}
                            animate={animation}>
                                <img src="./img/about1.jpg" className={classes.imgAbout} alt="" />
                            </Box>  
                            <Box width='45%' height='293px' mx={1}
                            component={motion.div}
                            variants={AboutImg}
                            animate={animation} >
                                <img src="./img/about2.jpg" className={classes.imgAbout} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} className={classes.myAuto} 
                    component={motion.div}
                    variants={AboutText} 
                    animate={animation} >                           
                        <Typography variant='h5' color='primary'>
                            Creative studio.
                        </Typography>
                        <Box my={5}>
                            <Typography variant='body1' color='primary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales pellentesque donec sed at. Lorem ac at tellus dolor, commodo hendrerit. Nec ut et non, tristique massa aliquam vestibulum. Et interdum cursus amet pulvinar dignissim purus ullamcorper ipsum pellentesque.
                            </Typography>
                        </Box>
                        <Box display='flex'>
                            <Box mr={3}>
                                <Link href='#'>
                                    <FacebookIcon color='secondary' fontSize='large'/>
                                </Link>
                            </Box>
                            <Box mr={3}>
                                <Link href='#'>
                                    <InstagramIcon color='secondary' fontSize='large'/>
                                </Link>
                            </Box>
                            <Box mr={3}>
                                <Link href='#'>
                                    <PinterestIcon color='secondary' fontSize='large'/>
                                </Link>
                            </Box>
                        </Box>          
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
