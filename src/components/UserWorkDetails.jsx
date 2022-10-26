import React from "react";
import Input from "../shared/components/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";
const UserWorkDetails = ({ values, handleChange, next, prev }) => {
  let canGoNext =
    values.email.isValid && values.company.isValid && values.role.isValid;
  return (
    <form>
      <div>
        <div>
          <Input
            id="email"
            type="text"
            label="Email"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.email.value}
            initialValid={values.email.isValid}
          />
        </div>
        <div>
          <Input
            id="company"
            type="text"
            label="Company Name"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.company.value}
            initialValid={values.company.isValid}
          />
        </div>
        <div>
          <Input
            id="role"
            type="text"
            label="Role"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.role.value}
            initialValid={values.role.isValid}
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
          disabled={!canGoNext}
          onClick={() => {
            next();
          }}
          type="button"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default UserWorkDetails;
