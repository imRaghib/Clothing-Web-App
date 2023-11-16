import {
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE = {
  default: "DefaultButton",
  google: "GoogleSignInButton",
  inverted: "InvertedButton",
};

const getButton = (buttonType = BUTTON_TYPE.default) =>
  ({
    [BUTTON_TYPE.default]: DefaultButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
