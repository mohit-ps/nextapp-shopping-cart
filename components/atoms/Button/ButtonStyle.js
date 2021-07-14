import styled from "styled-components";
export const FlatButton = styled.button`
  background: var(--primary-clr);
  width: ${({ type }) => {
    if (type === "longBtn") return "50%";
    else if (type === "fullBtn") return "100%";
    else return "fit-content";
  }};
  color: white;
  padding: 14px;
  cursor: pointer;
  border: none;
`;

export const ProductPageButton = styled(FlatButton)`
  padding: 10px 20px;
`;

export const RoundButton = styled(FlatButton)`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  padding: 0;
`;

export const CartButton = styled(FlatButton)`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
