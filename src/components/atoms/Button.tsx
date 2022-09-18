import styled from "styled-components";

const Button = (props: any) => {
  const Button = styled.button`
    background: ${({ theme }) => theme.palette.blue.main};
    font-size: 1rem;
    padding: 0.25rem 1rem;
    margin: 1rem;
  `;
  return <Button>{props.children}</Button>;
};

export default Button;
