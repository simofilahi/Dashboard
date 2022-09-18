import React from "react";
import { Container } from "./index.styled";

export type Size = "small" | "medium" | "large";

interface IconButtonProps {
  children?: JSX.Element;
  disabled?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  color?: string;
  rounded?: boolean;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    children,
    disabled = false,
    size,
    style,
    color,
    rounded = false,
  } = props;

  return (
    <Container
      size={size}
      disabled={disabled}
      style={style}
      color={color}
      rounded={rounded}
    >
      {children}
    </Container>
  );
};

export default IconButton;
