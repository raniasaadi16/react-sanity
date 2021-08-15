import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Footer from '../components/Footer';
import HeaderSkeleton from '../skeletons/HeaderSkeleton';
import AboutSkeleton from '../skeletons/AboutSkeleton';
import ServiceSkeleton from '../skeletons/ServiceSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeam } from '../redux/ducks/Team';
import { getAllprojects } from '../redux/ducks/Project';
import { getAllSkills } from '../redux/ducks/Skill';
import { getAllservices } from '../redux/ducks/Service';
import { getAllblogs } from '../redux/ducks/Blog';
import { getAllReviews } from '../redux/ducks/Review';
import { motion } from 'framer-motion';
import { RoutingVar } from '../style/animations';


const Header = lazy(()=> import('../components/Header'))
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Team = lazy(() => import('../components/Team'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Skills = lazy(() => import('../components/Skills'));
const WorkHome = lazy(() => import('../components/WorkHome'));
const BlogHome = lazy(() => import('../components/BlogHome'));


export default function Home() {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review.reviews);
    const team = useSelector(state => state.team.team);
    const services = useSelector(state => state.service.services);
    const projects = useSelector(state => state.project.projects);
    const blogs = useSelector(state => state.blog.blogs);
    const skills = useSelector(state => state.skill.skills);

    useEffect(() => {
        dispatch(getAllSkills());
        dispatch(getAllTeam());
        dispatch(getAllservices());
        dispatch(getAllReviews(''));
        dispatch(getAllblogs('0..2'));
        dispatch(getAllprojects('0..3'));
    }, []);

    return (
            <motion.div 
            variants={RoutingVar} 
            exit='exit'>
                <Container maxWidth="lg">
                    <Suspense fallback={<HeaderSkeleton />}>
                        <Header/>
                    </Suspense>
                    <Suspense fallback={<AboutSkeleton />}>
                        <About/>
                    </Suspense>
                    <Suspense fallback={<ServiceSkeleton />}>
                        <Services services={services}/>
                    </Suspense>
                </Container>
                <Suspense fallback={<h1>loading....</h1>}>
                    <Team team={team}/>
                </Suspense>
                <Container>
                    <Suspense fallback={<h1>loading....</h1>}>
                        <Skills skills={skills}/>
                    </Suspense>
                    <Suspense fallback={<h1>loading....</h1>}>
                        <WorkHome projects={projects}/>
                    </Suspense>
                    <Suspense fallback={<h1>loading....</h1>}>
                        <Testimonials reviews={reviews}/>
                    </Suspense>
                    <Suspense fallback={<h1>loading....</h1>}>
                        <BlogHome blogs={blogs}/>
                    </Suspense>          
                </Container>
                <Footer/>
            </motion.div>
    )
}
