import styled from "styled-components";

export const NeutralButton = styled.button`
  background-color: #f48c06;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  border: none;
  transition: all 0.3s ease;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DangerButton = styled(NeutralButton)`
  background-color: #9d0208;
`;
