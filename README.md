# github-pr-review-system
Automatic GitHub PR Review System
Overview: The Automatic GitHub PR Review System is a web application that automates the process of reviewing pull requests (PRs) on GitHub. This application uses OAuth authentication to connect with GitHub, allowing users to authorize the application and store access tokens securely. It also implements a GitHub webhook to trigger actions whenever a new PR is created.

Key Features:

OAuth Authentication: Users can connect their GitHub accounts using OAuth, providing secure access to the application.
Webhook Integration: The application sets up a webhook to listen for new pull request events on a specified GitHub repository. This enables automatic triggers whenever a new PR is raised.
AI-Powered Review: Upon receiving a new PR event, the application fetches the PR data and utilizes an AI model to review the code changes, ensuring a consistent and automated review process.
Automatic Comments: The application posts the review results as comments on the respective PR, providing immediate feedback to developers.
Technologies Used:

Node.js: Server-side JavaScript runtime for building the application.
Express.js: Web framework for Node.js, simplifying the creation of server endpoints.
GitHub API: Used for interacting with GitHub repositories and managing PRs.
OAuth2: Protocol for secure authorization.
Setup Instructions:

Clone the repository:
bash
Copy code
git clone https://github.com/vijayramella/github-pr-review-system.git
Install dependencies:
bash
Copy code
npm install
Create a GitHub OAuth application and set the environment variables:
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
GITHUB_ACCESS_TOKEN
Start the server:
bash
Copy code
node server.js
Open your browser and navigate to http://localhost:3000 to connect your GitHub account. 
sample output or overview :-

![Screenshot 2024-10-06 190721](https://github.com/user-attachments/assets/5c74bbf6-043e-422c-9905-7375377f01a0) 
![Screenshot 2024-10-06 190732](https://github.com/user-attachments/assets/ecd8ae11-37dc-400d-9eb0-abb536279781)
![Screenshot 2024-10-06 190751](https://github.com/user-attachments/assets/cd03832f-30cd-4a4a-8201-4cd8ff6d00a6)
![Screenshot 2024-10-06 191941](https://github.com/user-attachments/assets/9b39c886-2871-42a8-bba7-bd9de41729ff)
![Screenshot 2024-10-06 190823](https://github.com/user-attachments/assets/172122ae-1988-4741-b685-4871e5262310)




