import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useStyle } from '../style/style';
import { Link } from 'react-router-dom';
import Moment from 'moment';

export default function BlogCard({blog}) {
    const classes = useStyle();

    return (
        <Box mt={7}>
            <Card className={classes.workCard}>
                <CardActionArea>
                    <CardMedia className={classes.blogMedia} image={blog.mainImage.asset.url}/>
                    <Box position='absolute' top='0' className={classes.blogTextArea} display='flex' alignItems='center'>
                        <CardContent className={classes.blogTex}>
                            <Typography variant="body1" className={classes.textWhite}>
                                {Moment(blog.publishedAt).format('MMMM Do YYYY')}
                            </Typography>
                            <Box mt='140px'>
                                <Typography gutterBottom variant="h6" className={classes.bgText}>
                                    BY {blog.team.name}
                               </Typography>
                               <Typography variant='h6' className={classes.textWhite}>
                                   <Link to={`/blog/${blog._id}`} className={classes.textWhite}>
                                       {blog.title}
                                   </Link>
                               </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>
        </Box>
    )
}
