// const field = () => {   return {type: "", required: true, label: "", options:
// []} }
import {FormFieldTypes} from "../models/Form";

const FormFields = [
  {
    type: FormFieldTypes.STRING,
    label: "Name",
    key: "name",
    required: true
  }, {
    type: FormFieldTypes.DATE,
    label: "Date of Birth",
    key: "dob",
    required: true,
    validations: {
      greaterThan: 18
    }
  }, {
    type: FormFieldTypes.RADIO,
    label: "Gender",
    key: "gender",
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
    required: false,
    key: "contactNumber"
  }, {
    type: FormFieldTypes.CHECKBOX,
    label: "Require Guardian Consent",
    key: "requireGuardianConsent",
    required: false
  }, {
    type: FormFieldTypes.OBJECT,
    label: "Guardian Details",
    key: "guardianDetails",
    required: false
  }
];

export default FormFields;