import React, {PureComponent} from 'react';

// Generic Form Field component
export default class FormField extends PureComponent {
  render() {
    const {label, type,name, value, _onFieldValueChange, field, containerClass} = this.props;

    return (
      <div className={containerClass}>
        <label className="label">{label}</label>
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          defaultChecked={false}
          onChange={(e) => _onFieldValueChange(e, field)}/>
      </div>
    )
  }
}

FormField.defaultProps ={
  _onFieldValueChange:()=>{}, field:{}, containerClass:""
}