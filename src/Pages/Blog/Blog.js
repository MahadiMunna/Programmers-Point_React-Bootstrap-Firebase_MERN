import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-4'>
            <Card className='m-auto' border="primary" style={{ width: '40rem' }}>
                <Card.Header>Question 1</Card.Header>
                <Card.Body>
                    <Card.Title> what is cors?</Card.Title>
                    <Card.Text>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card className='m-auto' border="success" style={{ width: '40rem' }}>
                <Card.Header>Question 2</Card.Header>
                <Card.Body>
                    <Card.Title> Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        I'm using Firebase Authentication because it provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.<br/><br/>
                        Okta, Auth0, OneLogin, Rippling, MicrosoftAzure etc are the other options.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card className='m-auto' border="danger" style={{ width: '40rem' }}>
                <Card.Header>Question 3</Card.Header>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>
                    <Card.Text>
                        In private route, If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is Logged in. This is how private route works.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <Card className='m-auto' border="warning" style={{ width: '40rem' }}>
                <Card.Header>Question 4</Card.Header>
                <Card.Body>
                    <Card.Title> What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                    Node.js is an open-source backend javascript runtime environment. It is used as backend service where javascript works on the server-side of the application. <br/><br/>
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
};

export default Blog;