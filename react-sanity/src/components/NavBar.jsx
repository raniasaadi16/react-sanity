import { useState } from 'react';
import { AppBar, Toolbar, List, ListItem, Button, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useStyle } from '../style/style';
import { motion, AnimatePresence } from 'framer-motion';
import { NavVar, NavListVar } from '../style/animations';
import Toggle from './Toggle';



export default function NavBar({theme, darkTheme, lightTheme, settheme}) {
    const classes = useStyle();
    const isMobil = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const [open, setopen] = useState(false);

    const handleList = () => {
        if(isMobil && open) return 'block';
        if(isMobil && !open ) return 'none';
        if(!isMobil) return 'flex';
    }
    
    return (
        <AppBar component={motion.div} elevation={0} color='inherit' position='fixed' className={classes.nav}
        variants={NavVar} 
        animate='visible'
        initial='hidden'
        >
            <Toolbar className={classes.flex} disableGutters={true}>
                <Link to='/' onClick={() => setopen(false)}>
                    <img src="https://res.cloudinary.com/ddu6qxlpy/image/upload/v1628980537/Agency_uhhxmf.svg" alt="" />
                </Link>
                <Toggle theme={theme} settheme={settheme} darkTheme={darkTheme} lightTheme={lightTheme}/>
                {isMobil && (
                    <Button onClick={() => setopen(!open)}>
                        <MenuIcon color='primary' size='large'/>
                    </Button>
                )}
                <AnimatePresence>
                    <List style={{display: handleList()}} className={isMobil ? classes.mobileList : ''}
                    component={motion.ul} 
                    variants={NavListVar} 
                    animate='visible'
                    initial='hidden'
                    exit='hidden' 
                    key={open} >
                        <ListItem className={classes.list}>
                            <ScrollLink to='about' spy={true} smooth={true} offset={-64} color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                About
                            </ScrollLink>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ScrollLink to='services' spy={true} smooth={true} offset={-64} color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                Services
                            </ScrollLink>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ScrollLink to='team' spy={true} smooth={true} offset={-64} color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                Team
                            </ScrollLink>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ScrollLink to='skills' spy={true} smooth={true} offset={-64} color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                Skills
                            </ScrollLink>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <Link to='/portfolio' color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                Portfolio
                            </Link>
                    </ListItem>
                    <ListItem className={classes.list}>
                            <Link to='/blog' color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                Blog
                            </Link>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ScrollLink to='testimonials' spy={true} smooth={true} offset={-64} color="primary" variant='body1' className={classes.link} onClick={() => setopen(false)}>
                                Testimonials
                            </ScrollLink>
                        </ListItem>
                    </List>
                </AnimatePresence>
            </Toolbar>
        </AppBar>
    )
}
