import React from "react";

import ProgressBar from "./ProgressBar";
import UserPersonalDetails from "./UserPersonalDetails";
import UserWorkDetails from "./UserWorkDetails";
import ConfirmForm from "./ConfirmForm";
import Succes from "./Succes";

import { useForm } from "../hooks/form-hook";
import { registerFormInitials } from "../utils/form initial data/RegisterInitials";

const UserRegisterForm = () => {
  const { formState, inputHandler, page, setPage } =
    useForm(registerFormInitials);

  const nextStep = () => {
    setPage((prev) => prev + 1);
  };
  const prevStep = () => {
    setPage((prev) => prev - 1);
  };

  switch (page) {
    case 1:
      return (
        <>
          <ProgressBar pageNumber={page} />
          <UserPersonalDetails
            values={formState.inputs}
            next={nextStep}
            handleChange={inputHandler}
          />
        </>
      );
    case 2:
      return (
        <>
          <ProgressBar pageNumber={page} />
          <UserWorkDetails
            values={formState.inputs}
            next={nextStep}
            prev={prevStep}
            handleChange={inputHandler}
          />
        </>
      );
    case 3:
      return (
        <>
          <ProgressBar pageNumber={page} />
          <ConfirmForm
            values={formState.inputs}
            next={nextStep}
            prev={prevStep}
            handleChange={() => {}}
          />
        </>
      );
    case 4:
      return (
        <>
          <ProgressBar pageNumber={page} />
          <Succes />
        </>
      );

    default:
      break;
  }
};

export default UserRegisterForm;
