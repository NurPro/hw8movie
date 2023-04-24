import React, { forwardRef } from "react";
import styled from "styled-components";

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
 `;
const Input = styled.input`
   padding: 6px;
   font-size: 16px;
  margin: 0.5rem;
 `;
const FormInput = forwardRef((props, ref) => {
  return (
    <FormInputContainer>
      <label htmlFor={props.id}>{props.labelName}</label>
      <Input type={props.inputType} id={props.id} ref={ref} />
    </FormInputContainer>
  );
});

export default FormInput;
