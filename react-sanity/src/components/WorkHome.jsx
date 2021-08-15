import { useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useStyle } from '../style/style';
import WorkCard from './WorkCard';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { Title, TitleGr, WorkCardVar } from '../style/animations';
import { Link } from 'react-router-dom';


export default function WorkHome({projects}) {
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
        <Box mt={5} className={classes.overflow} id='work'>
            <Box
            component={motion.div} 
            variants={TitleGr} 
            animate={animation}>
                <Box fontWeight="fontWeightBold">
                    <Typography className={classes.bigText} align='center'>
                        Our Work
                    </Typography>
                </Box>
                <Box mt={-7}
                component={motion.div}
                variants={Title}
                animate={animation}>
                    <Typography variant='h3' className={classes.bgText} align='center'>
                        Our Work
                    </Typography>
                </Box>
            </Box>
            <Box mt={5} ref={ref}>
                <Grid container spacing={3} justifyContent='center'>
                    {projects.map( project => (
                        <Grid item xs={12} sm={6} md={3} key={project._id}
                        component={motion.div} 
                        variants={WorkCardVar} 
                        animate={animation}>
                            <WorkCard project={project}/>
                        </Grid>
                    ))}
                </Grid>
                <Box display='flex' justifyContent='center' alignItems='center' mt={3}>
                    <Typography variant='h6'>
                        <Button color='secondary' endIcon={<ArrowForwardIcon/>} size='large'>
                            <Link to='/portfolio' className={classes.linkSec}>
                                See All 
                            </Link>
                        </Button>
                    </Typography>                  
                </Box>
            </Box>
        </Box>
    )
}
