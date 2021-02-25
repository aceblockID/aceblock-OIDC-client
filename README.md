[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/aceblockID/aceblock-OIDC-client">
    <img src="images/aceblock_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Aceblock OIDC client npm package</h3>

  <p align="center">
    This is opesource project of npm package from Aceblock, to help you easilly protect your web application.
    <br />
    <a href="https://github.com/aceblockID/aceblock-OIDC-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/aceblockID/aceblock-OIDC-client">View Demo</a>
    ·
    <a href="https://github.com/aceblockID/aceblock-OIDC-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/aceblockID/aceblock-OIDC-client/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

New tehnologies are comming and with them new possibillities, so here we are working on self sovereign identity, for enabeling end users to create their own identiti and with that to give them oportunity to gain controll over personal data (age, contact data, hobbies, ect.).

This project is just tiny part of the whole structure and enables businessess to easily implement register and login  of the potential customer into their web portals. At the same tame it makes it easi to implement authentication an authorisation of customers on any web app endpoint.

Here's how login and register works for user:
* User installs our Aceblock IDentity app on their mobile phone and creates their identity by entering their data 
* Business creates Aceblock IDentity for their domain/web portal
* Business installs aceblock-OIDC-client npm package and enters formerly created ID (detaild instructions for implementing are [here][instalation instructions])
* User opens businesses login/register page -> qr code shows -> user scans qr code with his web app and confirms connection and Voilà - User is registered and loged in to the web portal - web page automaticaly redirects from login page to user page

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [JavaScript](https://www.javascript.com/)
* [NPM](https://www.npmjs.com/)
* [ExpressJS](https://expressjs.com/)
* ...



<!-- GETTING STARTED -->
## Getting Started

This are instruction how to set up you project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Befor you start setting up the project you need to install:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation



1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. How to implement this project is more detailed described [here](https://github.com/aceblockID/aceblock-login-npm-template#installation) - actual implemetation in step 5.


<!-- USAGE EXAMPLES -->
## Usage

How to use this project is more detailed described [here](https://github.com/aceblockID/aceblock-login-npm-template#usage).


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/aceblockID/aceblock-OIDC-client/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Gregor Sajovic - [@aceblockcom](https://twitter.com/aceblockcom) - gregor.sajovic@netis.si

Project Link: [https://github.com/aceblockID/aceblock-OIDC-client](https://github.com/aceblockID/aceblock-OIDC-client)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
*



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/aceblockID/aceblock-OIDC-client.svg?style=for-the-badge
[contributors-url]: https://github.com/aceblockID/aceblock-OIDC-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aceblockID/aceblock-OIDC-client.svg?style=for-the-badge
[forks-url]: https://github.com/aceblockID/aceblock-OIDC-client/network/members
[stars-shield]: https://img.shields.io/github/stars/aceblockID/aceblock-OIDC-client.svg?style=for-the-badge
[stars-url]: https://github.com/aceblockID/aceblock-OIDC-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/aceblockID/aceblock-OIDC-client.svg?style=for-the-badge
[issues-url]: https://github.com/aceblockID/aceblock-OIDC-client/issues
[license-shield]: https://img.shields.io/github/license/aceblockID/aceblock-OIDC-client.svg?style=for-the-badge
[license-url]: https://github.com/aceblockID/aceblock-OIDC-client/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/aceblockcom/
[product-screenshot]: images/screenshot.png
[instalation instructions](https://github.com/aceblockID/aceblock-login-npm-example/blob/master/README.md)
