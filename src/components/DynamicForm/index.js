import React, {PureComponent} from 'react';
import {FormFieldTypes} from "../../models/Form";
import './styles.css';

import FormField from "./components/FormField";

class DynamicForm extends PureComponent {
  state = {
    formValues: {}
  }

  _onFieldValueChange = (event, field) => {
    const {formValues} = this.state;
    const {target={}} = event;
    const {value} = target;

    this.setState({
      formValues: {
        ...formValues,
        [field.key]: value
      }
    });
  }

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

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
