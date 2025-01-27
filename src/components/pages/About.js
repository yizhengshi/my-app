import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Container className="about-container" style={{marginBottom: 70}}>
                <div className="about-header">
                    About Me 
                </div> 
                <hr className="hline" />
                <Row style={{marginTop: 0, paddingBottom: 0}}>
                    <Col className="abt-left-col" xs={8}>
                        <div className="about-text"> 
                            My name is Yizheng (Jerry) Shi. I am an aspiring Software Engineer. I am currently doing Master's in Computer Science at Yale (Graduating May 2025).
                        </div> 
                        <div className="about-text">
                            I have interned at Morningstar, Barry-Wehmiller, and FIMEC. I am passionate about Distributed Systems and Scalable Backend Solutions. I have experience in designing fault-tolerant systems, microservice architectures, cloud infrastructure, DBMS, and optimizing real-time data pipelines. I am proficient in Go, Python, Java, Kubernetes, AWS, and Terraform.
                        </div>
                        <div className="about-text">
                            I am actively seeking full-time software engineering opportunities starting from May 2025. Feel free to contact me at{' '}
                            <a href="mailto:yizhengjerry@gmail.com">yizhengjerry@gmail.com</a>.
                        </div>
                    </Col>
                    <Col className="abt-right-col" xs={4}>
                        <Image
                            className="image-abt"
                            src={require("../../assets/images/about.jpg")}
                            roundedCircle
                        />
                    </Col> 
                </Row>
            </Container> 
        );
    }
}

export default About;