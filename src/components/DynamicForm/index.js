import React, {PureComponent} from 'react';
import {FormFieldTypes} from "../../models/Form";
import './styles.css';

class DynamicForm extends PureComponent {
  state = {
    values: {}
  }

  _onFieldValueChange = (event, field) => {
    const {values} = this.state;
    this.setState({
      values: {
        ...values,
        [field.key]: event.target.value
      }
    });
  }

  fieldRenderer = (field) => {
    const {type, label, options, key} = field;
    const {} = this.state;

    switch (type) {
      case FormFieldTypes.DATE:
        return (
          <div key={key + type} className="field_container">
            <label className="label">{label}</label>
            <input
              className="input"
              type="date"
              onChange={(e) => this._onFieldValueChange(e, field)}/>
          </div>
        )

      case FormFieldTypes.STRING:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            <input
              className="input"
              type="text"
              onChange={(e) => this._onFieldValueChange(e, field)}/>
          </div>
        )

      case FormFieldTypes.CHECKBOX:
        return (
          <div key={label + type} className="field_container">
            <label className="label">{label}</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => this._onFieldValueChange(e, field)}/>
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
                  name={field.label}
                  onChange={(e) => this._onFieldValueChange(e, field)}/>
              </div>
            ))
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
