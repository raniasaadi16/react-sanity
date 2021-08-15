import { lazy, Suspense, useState } from 'react';
import './App.css';
import { Switch, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { darkTheme, lightTheme } from './style/theme';
import Toggle from './components/Toggle';
import Spinner from './skeletons/Spinner';
import NavbarSkeleton from './skeletons/NavbarSkeleton';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

const NavBar = lazy(() => import('./components/NavBar'))
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const SinglePortfolio = lazy(() => import('./pages/SinglePortfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const SingleBlog = lazy(() => import('./pages/SingleBlog'));



function App() {
  const location = useLocation();
  const [theme, settheme] = useState(darkTheme)
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="App">
          <Suspense fallback={<NavbarSkeleton />}>
            <NavBar theme={theme} settheme={settheme} darkTheme={darkTheme} lightTheme={lightTheme}/>
          </Suspense>
        <AnimatePresence exitBeforeEnter>
        <ScrollToTop>
          <Switch location={location} key={location.key}>
            <Route path='/' exact>
              <Suspense fallback={<Spinner/>}>
                <Home/>
              </Suspense>
            </Route>
            <Route path='/portfolio' exact>
              <Suspense fallback={<Spinner/>}>
                <Portfolio/>
              </Suspense>
            </Route>
            <Route path='/portfolio/:id' >
               <Suspense fallback={<Spinner/>}>
                  <SinglePortfolio/>
                </Suspense>
            </Route>
            <Route path='/blog' exact>
               <Suspense fallback={<Spinner/>}>
                  <Blog/>
                </Suspense>
            </Route>
            <Route path='/blog/:id' >
               <Suspense fallback={<Spinner/>}>
                  <SingleBlog/>
                </Suspense>
            </Route>
          </Switch>
        </ScrollToTop>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
