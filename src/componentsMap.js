// import Counter from './taskComps/Counter';
import React from 'react';
const componentNames = {
  "counter": 'Counter',
  "image-gallery": "ImageGallery",
  "accordion": "Accordion",
  "guess-the-number": "GuessTheNumber",
  "star-rating": "StarRating",
  "telephone-formatter": "TelephoneFormatter",
  "string-transformers": "StringTransformers",
  "tic-tac-toe": "TicTacToe",
  "stepper": "Stepper",
  "calculator": "Calculator",
  "traffic-lights": "TrafficLights",
  "toast-popup": "ToastPopup",
  "modal-popup": "ModalPopup",
  "password-strength": "PasswordStrength",
  "grid-lights": "GridLights",
  "column-table": "ColumnTable",
  "todo-list": "TodoList",
  "todo-list-1": "TodoList",
  "stopwatch": "Stopwatch",
  "quiz-app": "QuizApp",
  "chess-board": "ChessBoard",
  "transfer-list": "TransferList",
  "match-pair": "MatchPair",
  "chips-input": "ChipsInput",
  "advanced-counter": "AdvancedCounter",
  "nested-checkbox": "NestedCheckbox",
  "nested-comments": "NestedComments",
  "word-connect": "WordConnect",
  "otp": "Otp",
  "file-explorer": "FileExplorer",
  "typeahead-offline": "TypeaheadOffline",
  "typeahead-online": "TypeaheadOnline"
};

const componentsMap = {};

Object.entries(componentNames).forEach(([key, componentName]) => {
  try {
    componentsMap[key] = React.lazy(() => import(`./taskComps/${componentName}.jsx`));
  } catch (err) {
    console.warn(`Component ${componentName} not found`);
  }
});

export default componentsMap;
