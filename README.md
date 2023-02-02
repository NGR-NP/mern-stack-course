# Reactjs E-commerce UI

![This is an image](./src/images/2laptop.png)

[Live Demo](https://vrit-tech-mern-project-by-tejkarki.netlify.app/).

## Icons

on this project i used [Material UI Icons](https://mui.com/material-ui/material-icons)

## images

promptbase ai generated images [marketplace](https://promptbase.com/marketplace?categories=clothes)
& [illustrations](https://icons8.com/illustrations)


[Generate linear gradient cssgradient](https://cssgradient.io/)


[Mobile simulator - responsive testing tool extensions](https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk)

## React main file, [index.js](https://github.com/NGR-NP/mern-stack-course/blob/E-commerce-ui/src/index.js)

This Project is a React application that utilizes the Redux library to manage state and the Redux Persist library to persist the state to local storage. The main file, index.js, serves as the entry point for the applicaton.

1. It starts by importing the required libraies and components, including the App components, the `Redux store` and the `persistor`. The store andd persistor and imported from the `"./new/app/store"` file.

2. a ReactDOM root is created using the document.getElementById method and the render method is used to render the application.

3. The application is wrapped in a `React.StrictMode` components for improved debgugging and performance, and the `Redux Provider` is used to provide the store to the rest of the application.

4. The `PersistGate` component is used to persist the state of the store to local storage. This means that the state of the application will persist even after a page refresh or if the user closes the application. The `PersistGate` component takes in the `persistor`, which is also imported from the `"./new/app/store"` file. The `persistor` is responsible for persisting the state of the store to local storage.
 

### React RouterProvider [App.js](https://github.com/NGR-NP/mern-stack-course/blob/E-commerce-ui/src/App.js)

The RouterProvider component provides the routing functionality to the application and the `"router"` object defines the pages where i set all routing functionality into the  application. 


[canva slides](https://www.canva.com/design/DAFYyzTjL5I/71o0gL47Z9NUXYrz-yIBgA/edit?utm_content=DAFYyzTjL5I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)





### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)