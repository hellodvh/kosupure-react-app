## Kosupure React App
<!-- REPLACE ALL THE [USERNAME] TEXT WITH YOUR GITHUB PROFILE NAME & THE [PROJECTNAME] WITH THE NAME OF YOUR GITHUB PROJECT -->
<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/hellodvh/kosupure-react-app?color=69f0ae&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/hellodvh/kosupure-react-app?color=69f0ae&logoColor=ffa01c&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/hellodvh/kosupure-react-app?color=69f0ae&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/hellodvh/kosupure-react-app?color=69f0ae&label=LICENSE&style=for-the-badge)
<br/>
<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Behance][behance-shield]][behance-url]
<!-- [![Instagram][instagram-shield]][instagram-url] -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dylanvanhout.1/
<!-- [instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555 -->
<!-- [instagram-url]: https://www.instagram.com/instagram_handle/ -->
[behance-shield]: https://img.shields.io/badge/-Behance-black.svg?style=flat-square&logo=behance&colorB=555
[behance-url]: https://www.behance.net/dylanvanhout/

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Dylan Vanhout</h5>
<h5 align="center" style="padding:0;margin:0;">190160</h5>
<h6 align="center">DV300 2022</h6>
</br>
<p align="center">

  <a href="https://github.com/hellodvh/kosupure-react-app">
    <img src="Screenshots/logo.png" alt="Logo" width="125">
  </a>
  
  <h3 align="center">Kosupure</h3>

  <p align="center">
    Cosplay Champions <br>
      <a href="https://github.com/hellodvh/kosupure-react-app"><strong>Explore the docs »</strong></a>
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/hellodvh/kosupure-react-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/hellodvh/kosupure-react-app/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->
## Table of Contents
<details>
  <summary>Show Contents</summary>

- [Kosupure React App](#kosupure-react-app)
- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Project Description](#project-description)
  - [Built With](#built-with)
  - [also built with...](#also-built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
  - [Installation](#installation)
- [Features and Functionality](#features-and-functionality)
  - [Feature 1](#feature-1)
  - [Feature 2](#feature-2)
  - [Feature 3](#feature-3)
  - [Feature 4](#feature-4)
- [Concept Process](#concept-process)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

</details>

</br>

<!--PROJECT DESCRIPTION-->
## About the Project
Brief Overview: Design and Develope a React Native and JavaScript Mobile Application for an Competition using Google Firebase and Expo.
<!-- header image of project -->

## Project Description

Kosupure: an interactive mobile application built with React Native and Google Firebase. The theme of the mobile is Cosplay Fantasy culture.

The mobile application facilitates cosplay competitions by allowing users to register and create new competitions. Users can enter into competitions and vote on the list of participants and entries.

React Native and Expo was used to create the mobile application front-end. Google Firebase was implemented for the database storage and authentication.

These are the outcomes of the course work and brief for the term : 

 - [x] Implement a cross-platform based mobile application
 - [x] Implement a mobile application with a programming language (JavaScript)
 - [x] Create and manage complex data structures
 - [x] Implement a user driven front-end design
 - [x] Deploy a mobile application
 - [x] Show consistent and effective version control
 - [x] Professionally present final work
 - [x] Conduct and implement research on subject matter
 - [x] Implement a NoSQL Database
 - [X] Implement a data driven UI

</br>

### Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React Native](https://reactnative.dev/docs/getting-started)
* [Expo](https://docs.expo.dev/)
* [Visual Studio Code](https://code.visualstudio.com/docs)
* [Google Firebase](https://firebase.google.com/docs)
* [React Navigation](https://reactnavigation.org/docs/getting-started)

### also built with...
* [Google Fonts](https://fonts.google.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

</br>
<details>
  <summary>Show Getting Started</summary>
</br>

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [Node.js](https://nodejs.org/en/),[Visual Studio 2022](https://visualstudio.microsoft.com/downloads/), [Yarn](https://yarnpkg.com/), installed on your machine. The [Expo](https://docs.expo.dev/) toolchain will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. Visual Studio Code </br>

`Visual Studio` -> `File` -> `Clone Repository` -> `Git`
Enter the Git repository URL into the URL field and press the `Clone` button.
  ```sh 
  https://github.com/hellodvh/kosupure-react-app.git
  ``` 

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/username/projectname.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ``` npm install ```
   ``` yarn install ```

4. Create a new Firebase Application in the Firebase Console and edit the `firebase.config.js` file:
   
 ```js 
 const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    };
```

1.  Build and Run:
   ``` expo start ```



</details>
</br>


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

![image1][image1]
### Feature 1

![image2][image2]
### Feature 2

![image3][image3]
### Feature 3

![image4][image4]
### Feature 4

<!-- ![image5][image5] -->


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

<!-- ### Ideation

![image5][image5]
<br>
![image6][image6] -->

<!-- ### Wireframes

![image7][image7] -->

<!-- ### User-flow

![image8][image8] -->

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->

* Made use of both `functionality` to implement a specific feature.
* `MVC/MVVM` design architecture implemented.
* `Plugin` for this.
* ETC.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Sunshine.
* Rainbows.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Bugs.
* Bugs.

<!-- ### Reviews & Testing -->
<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->

<!-- #### Feedback from Reviews

`Peer Reviews` were conducted by my fellow students and lecturer. The following feedback I found useful:

* Feedback one.
* Feedback two. -->

<!-- #### Unit Tests -->

<!-- `Unit Tests` were conducted to establish working functionality. Here are all the tests that were ran:

* Test 1 of this functionality
* Test 2 of this functionality -->

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Future 1.
* Future 2.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

<!-- ![image9][image9] -->
<br>
<!-- ![image10][image10] -->

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/username/projectname/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->
## Authors

* **Dylan Vanhout** - [username](https://github.com/hellodvh)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Dylan Vanhout** - [email@address](mailto:190160@virtualwindow.co.za) 
* **Project Link** - https://github.com/hellodvh/kosupure-react-app

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)


<!-- MARKDOWN LINKS & IMAGES -->
[image1]: /Screenshots/image1.png
[image2]: /Screenshots/image2.png
[image3]: /Screenshots/image3.png
[image4]: /Screenshots/image4.png
[image5]: /path/to/image.png
[image6]: /path/to/image.png
[image7]: /path/to/image.png
[image8]: /path/to/image.png
[image9]: /path/to/image.png
[image10]: /path/to/image.png


<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nameonlinkedin/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/instagram_handle/
[behance-shield]: https://img.shields.io/badge/-Behance-black.svg?style=flat-square&logo=behance&colorB=555
[behance-url]: https://www.behance.net/name-on-behance/
