import React from "react";
import Input from "../shared/components/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";
const UserPersonalDetails = ({ values, handleChange, next }) => {
  let canGoNext = values.name.isValid && values.surname.isValid;
  return (
    <form>
      <div>
        <div>
          <Input
            id="name"
            type="text"
            label="Name"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.name.value}
            initialValid={values.name.isValid}
          />
        </div>
        <div>
          <Input
            id="middleName"
            type="text"
            label="Middle Name"
            errorText=""
            onInputChange={handleChange}
            validators={[]}
            initialValue={values.middleName.value}
            initialValid={true}
          />
        </div>
        <div>
          <Input
            id="surname"
            type="text"
            label="Surname"
            errorText="This field is required"
            onInputChange={handleChange}
            validators={[VALIDATOR_REQUIRE()]}
            initialValue={values.surname.value}
            initialValid={values.surname.isValid}
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

export default UserPersonalDetails;
