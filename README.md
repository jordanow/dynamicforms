# Dynamic Forms

## Setup
 - git clone
 - npm i
 - npm start


## Logic
- The form structure would be defined in the `models/Form.js` file
  - Specify field type, label, key, validations
- The field types and validation types would be managed via `models/FormConstants.js`

- The form would render the fields dynamically based on the field type. Additional types can be added in the form schema.

- Validations are run on form submit