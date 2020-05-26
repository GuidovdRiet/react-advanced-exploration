import React from "react";

// Component
import LoginForm from "./LoginForm";
import { useFormInput } from "../../../pages/LoginPage";

export default {
  title: "modules/Forms/LoginForm",
  component: LoginForm,
};

export const Default = () => {
  const username = useFormInput("");
  const password = useFormInput("");

  return (
    <LoginForm
      username={username}
      password={password}
      handleLogin={() => {}}
      error={null}
    />
  );
};
