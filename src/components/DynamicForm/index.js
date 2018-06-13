import React, {PureComponent} from 'react';
import {FormFieldTypes} from "../../models/Form";
import './styles.css';

class DynamicForm extends PureComponent {
  fieldRenderer = (field) => {
    const {type, label, options} = field;

    switch (type) {
      case FormFieldTypes.DATE:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            <input className="input" type="date"/>
          </div>
        )

      case FormFieldTypes.STRING:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            <input className="input" type="text"/>
          </div>
        )

      case FormFieldTypes.CHECKBOX:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            <input className="input" type="checkbox"/>
          </div>
        )

      case FormFieldTypes.RADIO:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            {options.map(option => (
              <div key={option.value} className="radio_group">
                <label className="label">{option.value}</label>
                <input
                  className="input"
                  type="radio"
                  value={option.key}
                  name={field.label}/>
              </div>
            ))
}
          </div>
        )

      default:
        return;
    }
  }

  render() {
    const {fields} = this.props;

    return (
      <form className="container">
        {fields.map((field) => this.fieldRenderer(field))}
      </form>
    );
  }
}

DynamicForm.defaultProps = {
  fields: []
}

export default DynamicForm;
