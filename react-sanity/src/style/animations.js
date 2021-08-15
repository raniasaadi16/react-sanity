export const cardHover = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            when: 'beforeChildren'
        }
    }
};

export const cardHoverText = {
    hidden: {
        y: 80
    },
    visible: {
        y: 0,
        
    }
};

export const RoutingVar = {
    exit: {
        x: '-100vw',
        transition: {
            duration: 0.4
        }
    },
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.4
        }
    }
};

export const NavVar = {
    hidden: {
        y: -200
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            type: 'tween'
        }
    }
};

export const HeaderVar = {
    hidden: {
        scale: 0.8, 
        opacity:0,
    },
    visible: {
        scale: 1, 
        opacity: 1,
        transition: {
            while:'beforeChildren'
        }
    }
};

export const HeaderTextVar = {
    hidden: {
        rotate: 360, 
        opacity:0
    },
    visible: {
        rotate: 0, 
        opacity: 1,
        transition: {
            delay: 1.2
        }
    }
};
export const AboutText = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.3
        }
    }
}

export const AboutImg ={
    hidden: {
        y: 70
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.5
        }
    }
}

export const TitleGr ={
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.2,
            duration: 0.4,
            when: 'beforeChildren'
        }
    }
}
export const Title ={
    hidden: {
        opacity: 0,
        scale: 1.2
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            scale: {
                delay: 0.9,
                duration: 0.4,
                type: 'spring',
                bounce: 0.25,
                stiffness: 60,
                yoyo: 2
            },
            opacity: {
                delay: 0.9,
                duration: 0.4,
            }
        }
    }
};

export const CardService = {
    hidden: {
        rotate: 20
    },
    visible: {
        rotate: 0,
        transition: {
            delay: 0.4,
            type: 'spring',
            stiffness: 50,
            damping: 5
        }
    }
};

export const TeamVar = {
    hidden: {
        opacity:0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 0.2,
            when: 'beforeChildren'
        }
    }
};

export const TitleSkill = {
    hidden: {
        y: 40,
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            delay: 0.3,
            damping: 5
        }
    }
};

export const SkillsVar = {
    hidden: {
        y: -40,
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            damping: 5,
            delay: 0.3
        }
    }
};

export const WorkCardVar= {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 30,
            damping: 7,
            delay: 0.7
        }
    }
};

export const ReviewText1 = {
    hidden: {
        x: 30,
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 30,
            damping: 7,
            delay: 1
        }
    }
};

export const ReviewText2= {
    hidden: {
        x: -30,
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 30,
            damping: 7,
            delay: 1
        }
    }
};

export const ReviewContent = {
    hidden: {
        scale: 1.1,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.3,
            delay: 1,
            yoyo: 2
        }
    }
};

export const ReviewImg = {
    hidden: {
        rotate: 20,
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 0.3,
            delay: 1,
            yoyo: 2
        }
    }
};

export const BlogHomeVar = {
    hidden: {
        y: 70,
    },
    visible: {
        y: 0,
        transition: {
            delay: 0.9,
            type: 'spring',
            stiffness: 60,
            damping: 5
        }
    }
};

export const FooterVar = {
    hidden: {
        scale: 1.5,
    },
    visible: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 70,
            yoyo: Infinity
        }
    }
};

export const PortfolioCardText = {
    hidden: {
        y: 40
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5
        }
    }   
};

export const ProductDescText = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8
        }
    }   
};

export const ProductDescImg = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.8
        }
    }   
};

export const GalleryVar = {
    hidden: {
        y: 30
    },
    visible: {
        y: 0,
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 50,
            damping: 5
        }
    }   
};

export const NavListVar ={
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
}



