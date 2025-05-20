import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden; /* To prevent scrollbars from main page */
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .pnlm-hotspot.custom-hotspot {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    padding: 5px 10px;
    cursor: pointer;
    color: #000; /* Ensuring text is visible */
    font-size: 14px; /* Ensuring text is visible */
  }

  .pnlm-hotspot.info-hotspot {
    background-color: #007bff; /* Changed to a common blue */
    border-radius: 50%;
    width: 25px; /* Slightly larger for better visibility */
    height: 25px;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Adding an 'i' icon for info hotspots if not overridden by specific hotspot text */
  .pnlm-hotspot.info-hotspot::before {
    content: 'i';
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 16px; /* Adjust size as needed */
  }


  .pnlm-hotspot.info-hotspot .pnlm-tooltip {
    background-color: rgba(0, 123, 255, 0.9); /* Matching the hotspot blue */
    color: #fff;
    border-radius: 5px;
    padding: 8px 12px; /* Slightly more padding */
    font-size: 14px;
    max-width: 220px; /* Adjusted max-width */
    white-space: normal;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Adding a subtle shadow */
  }
`; 