<div id="top"></div>

[![Forks][forks-shield]](https://github.com/butterjack/github-repos/network/members)
[![Stargazers][stars-shield]](https://github.com/butterjack/github-repos/stargazers)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/jawher-bouhouch/)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="public/github.png" alt="Logo" width="80" height="80">
  </a>

  <h4 align="center">Browse Github Repositories</h4>

  <p align="center">
    <br />
    <a href="https://github-repositories-test.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/butterjack/github-repos/issues">Report Bug</a>
    
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This project aims to let users search for github repositories of a certain user based on his username.
This readme is only a quick overview of the project. You can find a more detailed documentation in this gitbook link: https://jawher-b.gitbook.io/github-repositories/

### Built With

This project is made using :

- [React.js](https://reactjs.org/)

<!-- GETTING STARTED -->

## Getting Started

So to get yourself started with the application here is what is needed

### Prerequisites

You will need to have the latest npm installed with git also installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/butterjack/github-repos.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. Create a .env file and add your credentials

   ```sh
   // contents of .env
   REACT_APP_ACCESS_TOKEN="...";
   ```

2. Serve the project to a development server
   ```sh
   npm run start
   ```

<!-- Testing -->

## Testing

To run the test suite run this command

```sh
npm run test
```

<!-- Storybooks -->

## Storybooks

Start Storybooks

```sh
npm run storybook
```

## Notes and Todos

- The graphql api only permits us to query certain number of repositories. This still an ongoing isuue in github. So I had to choose a limit number: 100.
  https://github.community/t/graphql-api-how-to-fetch-all-repositories-that-the-current-user-has-access-to/13792

- Although I built unit tests and end-to-end tests, the test suites is basic due to the simplicity of the task

- I used a lot of css formats: inline css, bootstrap and css files. That is because I am not a css wizard so for each case I use what I feel comfortable with. And This part of the project needs to be improved.

## Feedback

This test was really challenging for me for a lot of reasons; I am more focused into backend development and the test was a pure frontend test so keeping everything responsive and implementing a design from scratch took the most time. And as I said above I am not a css wizard, so the css in this project is not well formated.

[contributors-shield]: https://img.shields.io/github/contributors/Dopeamin/github-repositories-fetch.svg?style=for-the-badge
[contributors-url]: https://github.com/butterjack/github-repos/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/butterjack/github-repos.svg?style=for-the-badge
[forks-url]: https://github.com/butterjack/github-repos/network/members
[stars-shield]: https://img.shields.io/github/stars/butterjack/github-repos.svg?style=for-the-badge
[stars-url]: https://github.com/butterjack/github-reposh/stargazers
[issues-shield]: https://img.shields.io/github/issues/butterjack/github-repos.svg?style=for-the-badge
[issues-url]: https://github.com/butterjack/github-repos/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
