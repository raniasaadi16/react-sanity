import { useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useStyle } from '../style/style';
import PortfolioFilter from '../components/PortfolioFilter';
import { useDispatch, useSelector } from 'react-redux';
import { getAllprojects } from '../redux/ducks/Project';
import { getAllcategories } from '../redux/ducks/Category';
import { motion } from 'framer-motion';
import { Title, RoutingVar } from '../style/animations';


export default function Portfolio() {
    const classes = useStyle();
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.projects);
    const categories = useSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(getAllprojects(''));
        dispatch(getAllcategories());
    }, []);

    return (
        <motion.div className={`${classes.overflow} ${classes.header}`}
        variants={RoutingVar}
        exit='exit'>
            <Box
            component={motion.div}
            variants={RoutingVar}
            initial='hidden'
            animate='visible'
            >
                <Box py={12} display='flex' justifyContent='center' alignItems='center' className={classes.portfolio}> 
                    <Box
                    component={motion.div}
                    variants={Title}
                    initial='hidden'
                    animate='visible'>
                        <Typography variant='h4' className={classes.textWhite}>
                            Portfolio
                        </Typography>
                    </Box>
                </Box>  
                <PortfolioFilter projects={projects} categories={categories}/>
            </Box>
        </motion.div>
    )
}
