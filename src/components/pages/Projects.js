import React from 'react';
import {Container} from 'react-bootstrap';
import ProjectOverview from './ProjectOverview';

class Projects extends React.Component {
    render() {
        return (
            <Container className="projects-container" style={{marginBottom: 75}}>
                <div className="projects-header">
                    Projects
                </div> 
                <hr />
                <ProjectOverview
                    title="Computer Vision for Industrial Quality Inspection"
                    year="2023"
                    tech = "Python, Sklearn, kNN, CNN, Edge Detection, Augmentation"
                    description={
                        <>
                        • Applied Sobel, Canny, Gaussian Markov Random Field (GMRF), and GLCM for image processing, edge detection, and feature extraction.
                        <br />
                        • Designed K-Nearest Neighbors (kNN) for defective classification with 88% accuracy.
                        <br />
                        • Built Convolutional Neural Network (CNN) and SVM for defective classification with 98.2% accuracy.
                        <br />
                        • Implement SHAP (SHapley Additive exPlanations) to identify defective area with Statistical Importance.
                        </>
                    }
                    github="https://github.com/Garrred/CVProject"
                    web="https://sites.google.com/wisc.edu/639project/"
                    />
                <hr />
                <ProjectOverview
                    title="Pandas Kitchen"
                    year="2022"
                    tech=" React.js, JavaScript, Node.js, MongoDB"
                    description={
                        <>
                        • Food Delivery Web Application, a web-based platform that allows users to order food online from various restaurants and have it delivered to their doorstep.
                        <br />
                        • The application provides easy-to-use interface for both customers and restaurant owners to interact with the platform.
                        <br />
                        • Major Features: Restaruant food Listing, Search and Filter, Cart Management, Order Placement, Restaurant Contact.
                        </>
                    }
                    github="https://github.com/yizhengshi/food-delivery-web"
                    web="https://yizhengshi.github.io/food-delivery-web/"
                    />
                    
                <hr />
                <ProjectOverview
                    title="Olympic Data Analysis"
                    year="2022"
                    word = "Tech Stack: "
                    tech = "Python, R, Pandas, Sklearn"
                    description={
                        <>
                            • Used the sklearn Python library and logistic regression algorithm to evaluate the possibility.
                            of players attending Beijing 2022 Winter Olympics games for individuals based on age, nationality, race, etc.
                            <br />
                            • Relied on Pandas and Matplotlib for data clean and visualizing on the initial dataset.
                        </>
                    }/>
                <hr />
                <ProjectOverview
                    title="Flight Planner"
                    year="2021"
                    word = "Tech Stack: "
                    tech = "Java, Python, Matplotlib"
                    description={
                        <>
                        • Implemented a command-line application along with Java dijkstra's algorithm and red black tree data structure to find the most optimal flight based on customer preference, such as time, price, etc.
                        <br />
                        • Visiualized and track the optimal flight path through Python Matplotlib Library.
                        </>
                    }
                    />
                <hr />
               
                 <ProjectOverview
                    title="Web Calculator"
                    year="2021"
                    word = "Tech Stack: "
                    tech = "React.js, Redux, JavaScript"
                    description={
                        <>
                        • A web-based application that simulates a basic calculator to perform arithmetic operations. 
                        <br />
                        • Major Features: Numeric Input, Arithmetic Operations, Error Handling, Clear Function, etc.
                        </>
                    }
                    github="https://github.com/yizhengshi/simple-calculator"
                    web ="https://yizhengshi.github.io/simple-calculator/"
                    />
            </Container> 
        );
    }
}

export default Projects;