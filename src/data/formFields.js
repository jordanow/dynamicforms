// const field = () => {   return {type: "", required: true, label: "", options:
// []} }
import {FormFieldTypes} from "../models/Form";

const FormFields = [
  {
    type: FormFieldTypes.STRING,
    label: "Name",
    required: true
  }, {
    type: FormFieldTypes.DATE,
    label: "Date of Birth",
    required: true,
    validations: {
      greaterThan: 18
    }
  }, {
    type: FormFieldTypes.RADIO,
    label: "Gender",
    required: false,
    options: [
      {
        key: "male",
        value: "Male"
      }, {
        key: "female",
        value: "Female"
      }
    ]
  }, {
    type: FormFieldTypes.STRING,
    label: "Contact Number",
    required: false
  }, {
    type: FormFieldTypes.CHECKBOX,
    label: "Require Guardian Consent",
    required: false
  }, {
    type: FormFieldTypes.OBJECT,
    label: "Guardian Details",
    required: false
  }
];

export default FormFields;