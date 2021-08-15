import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, Box } from '@material-ui/core';
import { useStyle } from '../style/style';
import { motion } from 'framer-motion';
import { cardHover, cardHoverText } from '../style/animations'

export default function TeamCard({team}) {
    const classes = useStyle();
    
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={team.image.asset.url}/>
                <Box component={motion.div} position='absolute' top='0' className={classes.cardHover}
                variants={cardHover} initial='hidden' whileHover='visible' whileTap='visible'>
                    <CardContent className={classes.cardHoverText} component={motion.div}
                    variants={cardHoverText}>
                        <Typography variant="body1" className={classes.textWhite}>
                            {team.name}
                        </Typography>
                        <Typography variant="body2" className={classes.textWhite} component="p">
                            {team.bio}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    )
}
