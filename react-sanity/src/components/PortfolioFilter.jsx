import { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button, Container } from '@material-ui/core';
import { useStyle } from '../style/style';
import WorkCard from '../components/WorkCard';
import { motion } from 'framer-motion';
import { TitleGr } from '../style/animations';


export default function PortfolioFilter({projects, categories}) {
    const classes = useStyle();
    const [filter, setfilter] = useState([]);
    const [tag, settag] = useState('All');

  
    useEffect(() => {
        if( tag === 'All'){
            setfilter(projects)
        }else{
            setfilter(projects.filter(project => project.categories.title === tag));
        }
    }, [tag,projects]);
    
    return (
        <Box mb={5}
        component={motion.div}
        variants={TitleGr}
        initial='hidden'
        animate='visible'>
            <Box mt={9} py={1} display='flex' justifyContent='center' mx='auto' border={1} borderColor='secondary.main' borderRadius='borderRadius' width='65%' className={classes.responsiveFilter}>
                    <Box mx={3}>
                        <Button size='large' onClick={() => settag('All')}>
                            <Typography variant='body1' color={tag === 'All' ? 'secondary' : 'primary'}>              
                                ALL
                            </Typography>
                        </Button>
                    </Box>
                    {categories.map((category) => (
                        <Box mx={3} key={category._id}>
                            <Button size='large' onClick={() => settag(category.title)}>
                                <Typography variant='body1' color={tag === category.title ? 'secondary' : 'primary'}>              
                                    {category.title}
                                </Typography>
                            </Button>
                        </Box>
                    ))}
            </Box>
            <Container>
                <Box mt={9} mx={3}>
                    <Grid container spacing={3}>
                        {filter.map(project => (
                            <Grid item key={project._id} md={4} sm={6} xs={12}>
                                <WorkCard project={project}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>  
        </Box>
    )
}
