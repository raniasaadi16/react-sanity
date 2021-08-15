import { useEffect } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { useStyle } from '../style/style';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { cardHover, Title, TitleGr, CardService } from '../style/animations';


export default function Services({services}) {
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
        <Box mt={3} className={classes.overflow} id='services'>
            <Box
            component={motion.div} 
            variants={TitleGr} 
            animate={animation}>
                <Box fontWeight="fontWeightBold">
                    <Typography className={classes.bigText} align='center'>
                        Our Services
                    </Typography>
                </Box>
                <Box mt={-7}
                component={motion.div}
                variants={Title}
                animate={animation}
                >
                    <Typography variant='h3' className={classes.bgText} align='center'>
                        Our Services
                    </Typography>
                </Box>
            </Box>
            <Box mt={8} ref={ref}
            component={motion.div} 
            variants={cardHover} 
            animate={animation}>
                <Grid container spacing={5} >
                    {services.map(service => (
                        <Grid item lg={4} key={service._id}>
                            <Box borderRadius='borderRadius' className={classes.bgCard} py={3} px={3}
                            component={motion.div}
                            variants={CardService}
                            animate={animation}>
                                <span className={`iconify ${classes.icon}`} data-inline="false" data-icon={service.icon}></span>
                                <Box mt={1} mb={3}>
                                    <Typography variant='h5' color='primary'>
                                        {service.name}
                                    </Typography>
                                </Box>
                                <Typography variant='body1' color='primary'>
                                    {service.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
