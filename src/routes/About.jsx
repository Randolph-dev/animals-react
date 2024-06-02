import React from 'react';
import '../Components/css/about.css'; 

const About = () => {
    return (
        <div className="about-container">
            <h3>Project Description</h3>
            <p>
                This simple web application was developed using React to showcase a variety of animals from different species including birds, fishes, and insects. In addition, it's created with the idea of allowing users to modify each animal's individual card as they please.
                <br />
                <br />
                It serves as a practical exercise to reinforce key concepts in React, including routing, state management, data handling, and user interaction. Additionally, Bootstrap fundamentals were integrated to enhance the visual presentation of the app.
            </p>
            <h3>Features</h3>
            <p>The main features of this project include:</p>
            <ul>
                <li>
                    <strong>Routing:</strong> Allows users to navigate between different sections of the app seamlessly.
                    <ul>
                        <li><strong>State Management:</strong> Manages the application's state efficiently for a smooth user experience.</li>
                        <li><strong>Data Handling:</strong> Handles data fetching, storage, and manipulation effectively.</li>
                        <li><strong>User Interaction:</strong> Provides interactive elements to engage users with the content.</li>
                    </ul>
                </li>
                <li><strong>Bootstrap Fundamentals:</strong> Utilized to ensure a visually appealing and responsive design.</li>
            </ul>
            <h3>The Learning Process</h3>
            <p>
                Developing this React app has been both an enriching and difficult learning journey. While it demanded more effort than I initially anticipated, it proved to be quite benificial in learning different concepts as well as hands-on experience with React fundamentals. This project has equipped me with essential skills that will serve as a solid foundation for future React development endeavors in my near future.
            </p>
        </div>
    );
}

export default About;