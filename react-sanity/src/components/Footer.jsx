import { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { FooterVar } from '../style/animations'

export default function Footer() {
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
        <Box mt={7} py={2} className={classes.bgCard} fontWeight='fontWeightBold' ref={ref} style={{overflow: 'hidden'}}>
            <Box
            component={motion.div} 
            variants={FooterVar} 
            animate={animation}>
                <Typography variant='body1' className={classes.bgText} align='center'>
                    By RANIA SAADI
                </Typography>
            </Box>
        </Box>
    )
}
