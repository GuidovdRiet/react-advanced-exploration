import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

// Components
import PageTemplate from "../templates/pageTemplate/PageTemplate";
import LoginForm from "../modules/Forms/loginForm/LoginForm";

const LoginPage: React.FC<{}> = () => {
  const [error, setError] = useState(null);

  const username = useFormInput("");
  const password = useFormInput("");
  const history = useHistory();

  // Handle login form button click
  const handleLogin = useCallback(async () => {
    const response = await fetch(
      "https://demo.chainels.com/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "password",
          username: username.value,
          password: password.value,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          scope: "",
        }),
      }
    );

    const data = await response.json();

    // Check if the request returns an error
    if (data.error) {
      console.log("HITS!");
      history.push("/login");
      setError(data.message);
      return;
    }

    // Save the access token in local storage, only for dev purposes
    if (data) {
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("expiresIn", data.expires_in);
      localStorage.setItem("refreshToken", data.refresh_token);
    }

    // User is logged in without any errors redirect to protected page
    history.push("/protected");
  }, [history, password.value, username.value]);

  return (
    <PageTemplate>
      {/* username, password, handleLogin, error */}
      <LoginForm
        username={username}
        password={password}
        handleLogin={handleLogin}
        error={error}
      />
    </PageTemplate>
  );
};

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default LoginPage;
