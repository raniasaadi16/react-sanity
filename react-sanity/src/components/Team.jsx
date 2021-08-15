import { useEffect } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import { useStyle } from '../style/style';
import TeamCard from './TeamCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsiveTeam } from '../style/carouselResponsive';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { cardHover, TeamVar, Title } from '../style/animations';

export default function Team({team}) {
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
        <Box mt={7} className={classes.overflow} id='team'
        ref={ref}
        component={motion.div}
        variants={cardHover}
        animate={animation}
        >
            <Box py={8} pl={5} className={classes.team} style={{flexGrow: 1}}
            component={motion.div}
            variants={TeamVar}
            animate={animation}>
                <Grid container alignItems='center'>
                    <Grid item lg={4} sm={12} xs={12} md={4}>
                        <Box width='50%'
                        component={motion.div}
                        variants={Title}
                        animate={animation}>
                            <Typography variant='h3' className={classes.textWhite}>
                                Our Team
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={8} sm={12} xs={12} md={8}>
                        <Carousel responsive={responsiveTeam}>
                            {team.map(person => <TeamCard key={person._id} team={person}/>)}
                        </Carousel>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
