import { Card, CardActions, Button } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  &.MuiButton-root {
    border-radius: 100px;
    height: 2rem;
    min-width: 2rem;
    width: 2rem;
  }
`;

export const StyledCard = styled(Card)`
  margin: 1rem;
  width: 35rem;
  height: 23.5rem;

  p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1.1rem;
      font-weight: 500;
      max-width: 100%;
  }

  section > .MuiButton-root {
    padding: 5px;
    border-radius: 100px;
    height: 3rem;
    min-width: 3rem;
    width: 3rem;
    margin: 0 20px;
  }
`;

export const StyledActions = styled(CardActions)`
  width: fit-content;
  margin: auto;
`;

export const StyledButton = styled(Button)`
    &.MuiButton-root {
      color: white;
    }
`
