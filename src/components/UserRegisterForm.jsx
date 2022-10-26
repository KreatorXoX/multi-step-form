import React from "react";

import ProgressBar from "./ProgressBar";
import UserPersonalDetails from "./UserPersonalDetails";
import UserWorkDetails from "./UserWorkDetails";
import ConfirmForm from "./ConfirmForm";
import Succes from "./Succes";

import { useForm } from "../hooks/form-hook";
import { registerFormInitials } from "../utils/form initial data/RegisterInitials";

const UserRegisterForm = () => {
  const { formState, inputHandler, page, setPage, title } =
    useForm(registerFormInitials);

  const nextStep = () => {
    setPage((prev) => prev + 1);
  };
  const prevStep = () => {
    setPage((prev) => prev - 1);
  };

  switch (page) {
    case 0:
      return (
        <>
          <ProgressBar title={title} pageNum={page} />
          <UserPersonalDetails
            values={formState.inputs}
            next={nextStep}
            handleChange={inputHandler}
          />
        </>
      );
    case 1:
      return (
        <>
          <ProgressBar title={title} pageNum={page} />
          <UserWorkDetails
            values={formState.inputs}
            next={nextStep}
            prev={prevStep}
            handleChange={inputHandler}
          />
        </>
      );
    case 2:
      return (
        <>
          <ProgressBar title={title} pageNum={page} />
          <ConfirmForm
            values={formState.inputs}
            next={nextStep}
            prev={prevStep}
            handleChange={() => {}}
          />
        </>
      );
    case 3:
      return (
        <>
          <ProgressBar title={title} pageNum={page} />
          <Succes />
        </>
      );

    default:
      break;
  }
};

export default UserRegisterForm;
