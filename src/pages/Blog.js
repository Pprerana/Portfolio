import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Blog() {
  const projects = [
    { title: "Trying to send an Email throgh node", description: "Sending Emails from Node.js Using a Python Program",
        link: "https://medium.com/@preranapupadhya/sending-emails-from-node-js-using-a-python-program-042ac5b04d80", // Add your link here
    },
    { title: "Trying to connect 3rd pary api through node to sen the email", description: "How to connect Mailgun to Node Application",
        link:"https://medium.com/@preranapupadhya/how-to-connect-mailgun-to-node-application-9c7f8d7941e9", 
     },
    
  ];

  return (
    <section
      className="projects-section text-white"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,rgb(0, 10, 100), #000000)',
        padding: '50px 0',
      }}
    >
      <Container>
        <h1 className="text-center mb-5">My Blogs</h1>
        <Row>
          {projects.map((project, index) => (
            <Col md={12} key={index} className="mb-4">
                 <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
              <div
                className="p-4 rounded shadow"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                }}
              >
                <h2 className="mb-2">{project.title}</h2>
                <p>{project.description}</p>
              </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
