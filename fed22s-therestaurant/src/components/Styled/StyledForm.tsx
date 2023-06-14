import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color: #370617;

  input[type="text"],
  textarea {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type="submit"] {
    background-color: #blue;
    color: white;
    padding: 10px 15px;
    border-radius: 4px;
  }

  input[type="submit"]:hover {
    background-color: #yellow;
  }

  input[type="text"],
  textarea,
  input[type="submit"] {
    display: block;
    width: 100%;
  }
`;