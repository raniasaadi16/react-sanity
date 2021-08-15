import { useEffect } from 'react';
import { Box, Typography, Grid, LinearProgress } from '@material-ui/core';
import { useStyle } from '../style/style';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { TitleSkill, SkillsVar } from '../style/animations';

export default function Skills({skills}) {
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
        <Box mt={8} className={classes.overflow} id='skills'>
            <Grid container spacing={3} ref={ref}>
                <Grid item lg={6} md={6} xs={12}
                component={motion.div}
                variants={TitleSkill}
                animate={animation}>
                    <Box>
                        <Typography variant='h5' className={classes.bgText}>
                            Our Skills
                        </Typography>
                    </Box>
                    <Box my={2}>
                        <Typography variant='h6' color='primary'>
                            Lorem ipsum dolor <Typography variant='h6' component='span' className={classes.bgText}>sit amet</Typography> , consectetur adipiscing elit. Non 
                        </Typography>
                    </Box>
                    <Typography color='primary' variant='body2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet porttitor est sapien senectus sit mi magna senectus. Donec diam lacus pulvinar rhoncus scelerisque morbi nisiDonec diam lacus pulvinar rhoncus scelerisque morbi nisi elementum tellus
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}
                component={motion.div}
                variants={SkillsVar}
                animate={animation}>
                    <Box mt={5}>
                        {skills.map(skill => (
                            <Box my={3} key={skill._id}>
                                <Typography variant='body2' color='primary'>{skill.name}</Typography>
                                <LinearProgress variant="determinate" value={skill.pourcentage} color='secondary' className={classes.bar}/>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
