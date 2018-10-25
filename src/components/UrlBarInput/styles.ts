import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 0;
  display: block;
  border: 1px solid #000;
`;

export const Wrapper = styled.div`
  position: fixed;
  padding: 15px 0px;
  border-bottom: 1px solid #000;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
`;

export const NavButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const BackButton = styled(NavButton)`
  padding: 0px 10px 0px 20px;
`;

export const ForwardButton = styled(NavButton)`
  padding: 0px 20px 0px 10px;
`;

export const SettingsButton = styled(NavButton)`
  padding: 0px 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-grow: 2;
  order: none;
`;
