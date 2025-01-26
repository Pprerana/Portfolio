import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
  const projects = [
    { title: "Chat-Application", description: "I developed a responsive web application using the MERN stack, hosted on Render at Meet Chat Share Info. The application features user authentication via Google or manual sign-up/sign-in. Upon first login, users can select an avatar from the available options. Users can create a room ID within the range of 1000-9999, receiving a notification if the selected ID is already in use. Passwords for rooms are visible only once for security. The application allows users to invite friends by providing their email ID and the room ID. Messaging within a chat room is enabled only when both parties have joined. Users can clear the chat room upon completion, and rooms are automatically cleared after 24 hours if left uncleared, ensuring availability for new users. ",
        link: "https://github.com/Pprerana/Chat-App", // Add your link here
    },
    { title: "Web Code- Simulator", description: "You can write HTML, css, and javascript in the respective editor and you can see the output in the output frame like below.",
        link:"https://github.com/Pprerana/code-simuator/tree/master", 
     },
    { title: "Hosting website in S3- AWS", description: "Hosting a small website (static) in the Amazon S3 Bucket, As AWS will be asking for payment to run the web app, i id a documentation on how to do it ",
        link: "https://github.com/Pprerana/AWS_Project_Doc", // Add your link here
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
        <h1 className="text-center mb-5">My Projects</h1>
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

export default Projects;
