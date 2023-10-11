import React from 'react';
import './InputText.style.css';

function InputText(props) {
  const { labelText, inputClassname, disabled, typeInput, idInput, inputName } = props;

  return (
    <div className={`input-text-container ${inputClassname}`}>
      <label>{labelText}</label>
      <input type={typeInput}  disabled={disabled} id={idInput} name={inputName} required />
    </div>
  );
}

export default InputText;
