import React from "react";

// style
import { LoginFormContainer, LoginFormWrapper } from "./loginForm.style";

interface loginFormProps {
  username: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  handleLogin: () => void;
  error: string | null;
}

const LoginForm: React.FC<loginFormProps> = ({
  username,
  password,
  handleLogin,
  error,
}) => {
  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <div>
          <p>Username</p>
          <input type="text" {...username} />
        </div>
        <div>
          <p>Password</p>
          <input type="password" {...password} />
        </div>
        <input type="button" value="Log in" onClick={handleLogin} />
        {error && <small>{error}</small>}
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
