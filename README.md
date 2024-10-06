# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

# Personal Expense Tracker

A React-based web application for managing personal expenses.

## Features

- Add, edit, and delete expense entries
- View expenses in a list format
- Display expenses in charts (by category and over time)
- Responsive design for mobile and desktop use
- Form validation and error handling
- Data persistence using Local Storage

## Technologies Used

- React 18
- React Router for navigation
- Context API for state management
- Chart.js for data visualization
- Material-UI for enhanced form components
- Framer Motion for animations
- React DatePicker for date selection
- Jest and React Testing Library for unit testing

## Setup and Running the Application

1. Clone the repository:
git clone https://github.com/PravallikaLearning/personal-expense-tracker

2. Navigate to the project directory:

cd personal-expense-tracker

3. Install dependencies:

npm install

4. Start the development server:

npm start

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Running Tests

To run the unit tests:

npm test


## Project Structure

- `src/App.js`: Main component and routing setup
- `src/contexts/ExpenseContext.js`: Context for global state management
- `src/components/`:
  - `ExpenseList.js`: Displays the list of expenses
  - `ExpenseForm.js`: Form for adding and editing expenses
  - `ExpenseSummary.js`: Shows total expenses and expenses by category
  - `ExpenseCharts.js`: Displays charts for expense visualization
- `src/App.css`: Styles for the application

## Assumptions and Notes

- The application uses browser's local storage for data persistence. In a production environment, this would be replaced with a backend API.
- The chart data is aggregated on the client side. For large datasets, this would ideally be handled on the server.
- The date picker and autocomplete components assume a desktop environment. Additional mobile-specific UI considerations may be needed for a fully responsive design.

## Optional Features Implemented

- Charts: Implemented using Chart.js to show expenses by category and over time.
- Form Enhancements: Added a date picker and autocomplete for the category field.
- Animations: Used Framer Motion for list item animations.
- Unit Testing: Basic tests implemented for components.

## Future Enhancements

- Implement more advanced filtering and sorting options for expenses
- Add user authentication and multi-user support
- Integrate with a backend API for true data persistence
- Implement more comprehensive error handling and data validation
