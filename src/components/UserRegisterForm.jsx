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
        <div className="layout">
          <ProgressBar title={title} pageNum={page} />
          <UserPersonalDetails
            values={formState.inputs}
            next={nextStep}
            handleChange={inputHandler}
          />
        </div>
      );
    case 1:
      return (
        <div className="layout">
          <ProgressBar title={title} pageNum={page} />
          <UserWorkDetails
            values={formState.inputs}
            next={nextStep}
            prev={prevStep}
            handleChange={inputHandler}
          />
        </div>
      );
    case 2:
      return (
        <div className="layout">
          <ProgressBar title={title} pageNum={page} />
          <ConfirmForm
            values={formState.inputs}
            next={nextStep}
            prev={prevStep}
            handleChange={() => {}}
          />
        </div>
      );
    case 3:
      return (
        <div className="layout">
          <ProgressBar title={title} pageNum={page} />
          <Succes />
        </div>
      );

    default:
      break;
  }
};

export default UserRegisterForm;
