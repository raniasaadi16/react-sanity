export const responsiveTeam = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1190 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1190, min: 600 },
      items: 2
    },
    tabletLg: {
        breakpoint: { max: 959, min: 790 },
        items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
};

export const responsiveTestimonials = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const responsiveGallery = {
  default: 3,
  600: 1,
  960: 2
}
