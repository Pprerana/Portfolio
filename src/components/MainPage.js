import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';

function MainPage() {
  return (
    <section className="hero-section text-white text-center d-flex align-items-center bg-dark" style={{ minHeight: '100vh' }}>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <img
            src="Images/Capture1.PNG" // Replace with your image URL
            alt="Profile"
            className="rounded-circle mb-4"
            style={{ width: '150px', height: '150px' }}
          />
          <h1 className="display-4">Software Developer – Cloud & Automation Focus | AWS Cloud Engineer</h1>
          <p className='lead'>
          I'm a passionate developer specializing in Python, JavaScript, and REST APIs, with expertise in CI/CD pipelines and cloud infrastructure. 
          </p>
          <p className="lead">
            Hi, I'm Prerana P. With nearly 3+ years of experience, I've worked on automating processes using Python,scripting, built full-stack applications using React and Node.js, and implemented CI/CD pipelines with Jenkins. I’m passionate about optimizing workflows and creating scalable solutions that deliver real value.
          </p>
          
          <a href="/Resume/Prerana_P.pdf" download>
              <Button variant="success" className="mt-3 mb-2">
                Download CV
              </Button>
          </a>
          
          
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default MainPage