# NUTECH Job Fair Virtual Tour

This project is a virtual tour application for the NUTECH Job Fair, built with React and Pannellum.

## Features

*   Interactive 360-degree panoramic views of different campus locations.
*   Hotspots for navigation between locations and displaying information.
*   "All Views" sidebar for quick navigation.
*   Responsive design.
*   Tutorial/Welcome modal for new users.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment to GitHub Pages

To deploy this application to GitHub Pages:

1.  Ensure `gh-pages` is installed as a dev dependency:
    `npm install gh-pages --save-dev`
2.  Add the following properties to your `package.json` file:
    *   `"homepage": "https://{your-github-username}.github.io/{your-repo-name}"` (replace with your actual username and repo name)
    *   Under `"scripts"`:
        *   `"predeploy": "npm run build"`
        *   `"deploy": "gh-pages -d build"`
3.  Deploy by running:
    `npm run deploy`

This will create a `gh-pages` branch and push your `build` folder contents to it, making it live.

## Project Structure

*   `public/`
    *   `images/`: Contains all the 360-degree panoramic images for the tour.
    *   `index.html`: The main HTML page.
*   `src/`
    *   `components/`
        *   `TourView.js`: The core React component that handles the Pannellum viewer logic, hotspot interactions, and UI elements like navigation buttons and the "All Views" sidebar.
        *   `tourData.js`: Contains the configuration data for all tour locations (image paths, titles, info text, hotspot definitions) and tutorial steps.
        *   `TourView.styles.js`: Defines all styled-components used by `TourView.js`, keeping styling separate from component logic.
        *   `Welcome.js`: (If present) A component for the initial welcome screen before the tour starts.
    *   `App.js`: The main application component. It typically handles routing (if any) or sets up the main view, including the `TourView` and `Welcome` screen logic.
    *   `globalStyles.js`: Contains global CSS styles for the application, including base styles and overrides for Pannellum elements, implemented using `styled-components` `createGlobalStyle`.
    *   `index.js`: The entry point for the React application, rendering the `App` component into the DOM.
*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `package.json`: Lists project dependencies, scripts (like `start`, `build`, `deploy`), and other metadata like the `homepage` URL for deployment.
*   `README.md`: This file, providing information about the project.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Pannellum React:** A React wrapper for the Pannellum 360 photo viewer.
*   **Styled Components:** A library for styling React components using tagged template literals, allowing for component-scoped CSS.
*   **Create React App:** Used to set up the initial project structure and development environment.
*   **gh-pages:** A utility for deploying sites to GitHub Pages.