// template for triangle logos
export const triangleTemplate = (letters, backgroundColor, textColor, shapeColor) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <polygon points="50,10 10,90 90,90" fill="${shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${letters}</text>
      <style>
        svg { background-color: ${backgroundColor}; }
        text { font-size: 2em; font-weight: bold; }
      </style>
    </svg>
    `;
  };
  
  // template for circle logos
  export const circleTemplate = (letters, backgroundColor, textColor, shapeColor) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="${shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${letters}</text>
      <style>
        svg { background-color: ${backgroundColor}; }
        text { font-size: 2em; font-weight: bold; }
      </style>
    </svg>
    `;
  };
  
  //template for square logos
  export const squareTemplate = (letters, backgroundColor, textColor, shapeColor) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <rect width="100" height="100" fill="${shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${letters}</text>
      <style>
        svg { background-color: ${backgroundColor}; }
        text { font-size: 2em; font-weight: bold; }
      </style>
    </svg>
    `;
  };
  
 