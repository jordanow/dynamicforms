
import {FormFieldTypes, ValidationRuleTypes} from "../models/Form";

const FormFields = [
  {
    type: FormFieldTypes.STRING,
    label: "Name",
    key: "name",
    validations: [
      {
        type: ValidationRuleTypes.MIN_WORDS,
        value: 2,
        message: "Name should be at least 2 words long"
      }, {
        type: ValidationRuleTypes.REQUIRED,
        value: true,
        message: "Name is required"
      }
    ]
  }, {
    type: FormFieldTypes.DATE,
    label: "Date of Birth",
    key: "dob",
    validations: [
      {
        type: ValidationRuleTypes.MIN_DATE_DIFFERENCE,
        value: 18,
        message: "Date of birth should be greater than 18"
      }, {
        type: ValidationRuleTypes.REQUIRED,
        value: true,
        message: "Date of birth is required"
      }
    ]
  }, {
    type: FormFieldTypes.RADIO,
    label: "Gender",
    key: "gender",
    options: [
      {
        key: "male",
        value: "Male"
      }, {
        key: "female",
        value: "Female"
      }
    ],
    validations: [
      {
        type: ValidationRuleTypes.REQUIRED,
        value: false
      }
    ]
  }, {
    type: FormFieldTypes.STRING,
    label: "Contact Number",
    key: "contactNumber",
    validations: [
      {
        type: ValidationRuleTypes.REQUIRED,
        value: false
      }
    ]
  }, {
    type: FormFieldTypes.CHECKBOX,
    label: "Require Guardian Consent",
    key: "requireGuardianConsent",
    validations: [
      {
        type: ValidationRuleTypes.REQUIRED,
        value: false
      }
    ]
  }, {
    type: FormFieldTypes.OBJECT,
    label: "Guardian Details",
    key: "guardianDetails",
    validations: [
      {
        type: ValidationRuleTypes.REQUIRED,
        value: false
      }
    ]
  }
];

export default FormFields;