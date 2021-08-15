import { Typography, Box, Grid } from '@material-ui/core';
import { useStyle } from '../style/style';
import { motion } from 'framer-motion';
import { ProductDescImg, ProductDescText } from '../style/animations';

export default function ProductDesc({singleProject}) {
    const classes = useStyle();

    return (
        <Box mt={7} px={3}>
            {singleProject.map(project => (
                <Grid container spacing={5} key={project._id}>
                    <Grid item lg={6} className={classes.myAuto}
                    component={motion.div}
                    variants={ProductDescText}
                    initial='hidden'
                    animate='visible'>
                        <Typography variant='h3' color='primary'>
                            {project.title}
                        </Typography>
                        <Box my={5}>
                            <Typography variant='body1' color='primary'>
                                {project.body}
                            </Typography>
                        </Box>
                        <Typography variant='body1' color='secondary'>
                                category :     {project.categories.title}
                        </Typography>                   
                    </Grid>
                    <Grid item lg={6}
                    component={motion.div}
                    variants={ProductDescImg}
                    initial='hidden'
                    animate='visible'>
                        <img src={project.mainImage.asset.url} alt="" className={classes.portfolioImg} />
                    </Grid>
                </Grid>
            ))}
        </Box>
    )
}
