import { handleCheckbox } from './formTools/handleCheckbox'
import { handleChoice } from './formTools/handleChoice'
import { handleDropdown } from './formTools/handleDropdown'
import { handleText } from './formTools/handleText'

import { sendFormHTML } from './apiService/sendFormHTML'

console.log('Content  loaded.');

sendFormHTML().then(geminiCommands => {
  console.log(geminiCommands)
  geminiCommands.forEach(command => {
    console.log(command)
    inputTools(
      command.handleType,
      command
    );
  })
});

function inputTools(inputType, payload) {
  switch (inputType) {
    case 'text':
      handleText(payload);
      break;
    case 'dropdown':
      handleDropdown(payload);
      break;
    case 'checkbox':
      handleCheckbox(payload);
      break;
    case 'choice':
      handleChoice(payload);
      break;
    default:
      console.log('Unknown input type:', inputType);
  }
}
