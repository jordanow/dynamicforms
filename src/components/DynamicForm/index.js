import React, {PureComponent} from 'react';
import {FormFieldTypes, ValidationRuleTypes} from "../../models/FormConstants";
import './styles.css';
import moment from "moment";

import FormField from "./components/FormField";

class DynamicForm extends PureComponent {
  state = {
    formData: {}
  }

  // Upon field value update -> update the values in the component state
  _onFieldValueChange = (event, field) => {
    const {formData} = this.state;
    const {
      target = {}
    } = event;
    const {value} = target;

    this.setState({
      formData: {
        ...formData,
        [field.key]: value
      }
    });
  }

  // Field renderer takes care of managing the display of each form field
  fieldRenderer = (field) => {
    const {type, label, options, key} = field;

    switch (type) {
      case FormFieldTypes.DATE:
      case FormFieldTypes.STRING:
      case FormFieldTypes.CHECKBOX:

        return (<FormField
          key={key + type}
          type={field.type}
          field={field}
          label={label}
          containerClass="field_container"
          name={label}
          value={field.defaultValue}
          _onFieldValueChange={this._onFieldValueChange}/>)

      case FormFieldTypes.RADIO:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            {options.map(option => (<FormField
              value={option.value}
              label={option.value}
              key={label + option.value}
              type={field.type}
              field={field}
              containerClass="radio_group"
              name={field.label}
              _onFieldValueChange={this._onFieldValueChange}/>))
}
          </div>
        )

      default:
        return;
    }
  }

  // Run validations
  // Would need custom logic for each and every validation type
  runValidations = (key, value, validations = []) => {
    const messages = [];

    validations.map(rule => {
      switch (rule.type) {
        case ValidationRuleTypes.MIN_WORDS:
          const words = !!value
            ? value.split(" ")
            : [];
          if (words && words.length < rule.value) {
            messages.push(rule.message);
          }
          break;

        case ValidationRuleTypes.MIN_DATE_DIFFERENCE:
          const diff = moment(value).diff(moment(), 'years');

          if (diff < rule.value) {
            messages.push(rule.message);
          }
          break;

        case ValidationRuleTypes.REQUIRED:
          if (rule.value && !value) {
            messages.push(rule.message);
          }
          break;

        default:
          break;
      }
      return rule;
    });
    return messages;
  }

  /**
   * Validate form by validating all the fields specified in the schema with their corresponding values in formData
   */
  validateForm = (formData) => {
    const {schema} = this.props;

    return schema.reduce((arr, field) => {
      const messagesForField = this.runValidations(field.key, formData[field.key], field.validations);
      return arr.concat(messagesForField);
    }, []);
  }

  /**
   *
   * Upon form submit run validations and show errors if any
   * The form data should ideally be exported via a CSV or sent to clipboard
   */
  onFormSubmit = (event) => {
    event.preventDefault();
    const {
      formData = {}
    } = this.state;
    const validationErrors = this.validateForm(formData);

    if (validationErrors.length > 0) {
      alert(validationErrors.join("\n"));
    } else {
      console.log(formData);
    }
  }

  render() {
    const {schema} = this.props;

    return (
      <form className="container" onSubmit={this.onFormSubmit}>
        {schema.map((field) => this.fieldRenderer(field))}

        {schema.length > 0
          ? <button type="submit" className="submit_button">Submit</button>
          : null}
      </form>
    );
  }
}

DynamicForm.defaultProps = {
  schema: []
}

export default DynamicForm;
