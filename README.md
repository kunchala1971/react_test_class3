#npm install --save-dev @testing-library/react @testing-library/jest-dom
#npm install --save-dev eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import
#npm install --save-dev @testing-library/react @testing-library/jest-dom
#create a .eslintrc.json configuration file in root folder
#copy the following code 
<!-- {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // Add custom rules here
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
} -->
#To lint your project, you can add a script in your package.json:
<!-- "scripts": {
  "lint": "eslint src/**/*.{js,jsx}"
} -->

#Jest comes with built-in support for code coverage. To enable it, add a script in your package.json:

<!-- "scripts": {
  "test": "react-scripts test --coverage"
} -->

#For code formatting, you can use Prettier alongside ESLint. Install Prettier and the necessary ESLint plugin:
#npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
create .prettierrc file in root folder
<!-- {
  "singleQuote": true,
  "trailingComma": "es5"
} -->
#Update your ESLint config to include Prettier:
<!-- "extends": [
  // ...other extends
  "plugin:prettier/recommended"
] -->

#Add a format script in package.json: inside of the eslintConfig object
<!-- "scripts": {
  "format": "prettier --write src/**/*.{js,jsx,json,css}"
} -->

#add the following code for code coverage threadshold in package.json file end
	<!-- "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  } -->
  
  #run this command
  #git config --global core.autocrlf true