import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import { useStyle } from '../style/style';
import { useInView } from 'react-intersection-observer'; 
import { motion, useAnimation } from 'framer-motion';
import { PortfolioCardText } from '../style/animations';


export default function WorkCard({project}) {
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
        <div>
            <Card className={classes.workCard} >
                <CardActionArea>
                    <CardMedia
                    className={classes.workMedia}
                    image={project.mainImage.asset.url}
                    />
                    <CardContent className={classes.bgCard} ref={ref}>
                        <Box
                        component={motion.div}
                        variants={PortfolioCardText}
                        animate={animation}>
                            <Link to={`/portfolio/${project._id}`} className={classes.linkWork} >
                                <Typography gutterBottom variant="h5" component="h2" color='primary'>
                                    {project.title.length > 22 ? `${project.title.substring(0, 22)}.....` : project.title}                                   
                                </Typography>
                                <Typography variant="body2" color="primary" component="p">
                                    {project.categories.title}
                                </Typography>
                            </Link>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
