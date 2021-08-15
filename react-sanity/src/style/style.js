import { makeStyles } from "@material-ui/core";

const useStyle =  makeStyles(theme => ({
    textWhite: {
        color: 'white'
    },
    mobileList: {
        position: 'fixed !important',
        background: theme.palette.background.default,
        top:'64px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            top: '48px'
        }
    },
    nav: {
        padding: '0 24px'
    },
    header: {
        marginTop: '64px'
    },
    skeleton: {
        backgroundColor: 'rgba(250, 235, 235, 0.1) !important'
    },
    overflow: {
        overflow: 'hidden'
    },
    icon: {
        fontSize: '35px',
        color: theme.palette.secondary.main
    },
    img: {
        width: '100%',
        height: '500px',
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.17), rgba(0, 0, 0, 0.17)), url(https://res.cloudinary.com/ddu6qxlpy/image/upload/v1628980633/header_l5e1pz.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    flex: {
        justifyContent: 'space-between'
    },
    list: {
        padding: '0 0 0 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '15px'
        }
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        cursor: 'pointer'
    },
    linkSec: {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    },
    bigText: {
        WebkitTextStroke: `1px ${theme.palette.secondary.strok}`, // for dark only!
        color: 'transparent',
        fontSize: '45px',
        position: 'relative',
        top: '-12px',
        [theme.breakpoints.up('sm')] :{
            fontSize: '60px',
            top: 0
        },
        [theme.breakpoints.up('md')] :{
            fontSize: '70px',
            top: 0
        }
    },
    bgText: {
        background: '-webkit-linear-gradient(#F9D7AD,#D3CBB8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    imgAbout: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '5px'
    },
    inlineBlock: {
        display: 'inline-block'
    },
    team: {
        background: 'linear-gradient(90deg, #F9D7AD 0%, rgba(18, 26, 33, 0) 36.11%)'
    },
    bgCard: {
        background: theme.palette.primary.light
    },
    card: {
        width: '240px',
        position: 'relative',
        '&::after': {
            content:'',
            width: '100%',
            height: '100%',
            background:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #D3CBB8 73.73%)'
        }
    },
    media: {
        height: '298px',
    },
    cardHover: {
        background:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #D3CBB8 73.73%)',
        width: '100%',
        height: '100%'
    },
    cardHoverText: {
        position: 'relative',
        top: '73%'
    },
    bar:{
        borderRadius: '10px',
        height: 7
    },
    bgTransparent: {
        background: 'transparent',
        boxShadow: '0 0 0 0'
    },
    workCard: {
        width: '100%'
    },
    workMedia: {
        height: '321px'
    },
    blogMedia: {
        height: '348px'
    },
    blogTextArea: {
        background:'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        width: '100%',
        height: '100%'
    },
    blogTex: {
        position: 'relative',
    },
    reviewImg: {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        borderRadius: '50%'
    },
    myAuto: {
        margin: 'auto 0'
    },
    portfolio: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(https://res.cloudinary.com/ddu6qxlpy/image/upload/v1628980756/ian-dooley-DJ7bWa-Gwks-unsplash_pjbkot.jpg);',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    blogBg: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(https://res.cloudinary.com/ddu6qxlpy/image/upload/v1628980570/dariusz-sankowski-3OiYMgDKJ6k-unsplash_xpexib.jpg);',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    linkWork: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
    portfolioImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    myMasonrygrid: {
        display: '-webkit-box', 
        display: '-ms-flexbox',
        display: 'flex',
        marginLeft: '-30px',
        width: 'auto'
    },
    myMasonryGrid_column: {
        paddingLeft: '30px', 
        backgroundClip: 'padding-box',
        "& > div" :{
            marginBottom: '30px'
        }
    },
    responsiveFilter: {
        [theme.breakpoints.down('xs')]: {
            display: 'block !important',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    toggle: {
        background: theme.palette.primary.main, 
        zIndex: '1000'
    }
}));

export {useStyle};