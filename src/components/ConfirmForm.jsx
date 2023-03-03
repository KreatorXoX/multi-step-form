import React from "react";
import Input from "../shared/components/Input";
const ConfirmForm = ({ values, next, prev, handleChange }) => {
  return (
    <form>
      <div>
        <div>
          <Input
            id="name"
            disabled={!values.name.value}
            type="text"
            label="Name"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.name.value}
            initialValid={values.name.isValid}
            readOnly
          />
        </div>
        <div>
          <Input
            id="middleName"
            disabled={!values.middleName.value}
            type="text"
            label="Middle Name"
            errorText=""
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.middleName.value}
            initialValid={true}
            readOnly
          />
        </div>
        <div>
          <Input
            id="surname"
            disabled={!values.surname.value}
            type="text"
            label="Surname"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.surname.value}
            initialValid={values.surname.isValid}
            readOnly
          />
        </div>
        <div>
          <Input
            id="email"
            disabled={!values.email.value}
            type="text"
            label="Email"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.email.value}
            initialValid={values.email.isValid}
            readOnly
          />
        </div>
        <div>
          <Input
            id="company"
            disabled={!values.company.value}
            type="text"
            label="Company Name"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.company.value}
            initialValid={values.company.isValid}
            readOnly
          />
        </div>
        <div>
          <Input
            id="role"
            disabled={!values.role.value}
            type="text"
            label="Role"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.role.value}
            initialValid={values.role.isValid}
            readOnly
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => {
            prev();
          }}
          type="button"
        >
          Previous
        </button>
        <button
          onClick={() => {
            next();
          }}
          type="button"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default ConfirmForm;
