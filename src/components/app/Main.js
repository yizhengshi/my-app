import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Resume from '../pages/Resume';
import Footer from '../layout/Footer';
import './styles/Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/education' component={Education}/>
                    <Route path='/resume' component={Resume}/>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default Main;