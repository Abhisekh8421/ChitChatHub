import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHiddenInput = styled("input")`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1;
  margin: -1;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1;
`;

export const Link = styled(LinkComponent)`
  padding: 1rem;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: grey;
  }
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  borderradius: 1.5rem;
  backgroundcolor: grey;
`;
export const CurveButton = styled("button")`
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: "#28282B";
  background-color: "#28282B";
  font-size: 1.1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
`;

export const SearchField = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border: 1px solid black;
  outline: none;
  border-radius: 1.5rem;
  background-color: "#28282B";
  font-size: 1.1rem;
`;
