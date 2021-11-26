import styled from "@emotion/styled";

export const GreyText = styled.p`
  line-height: 28px;
  color: #6e767d;
  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const WhiteText = styled.p`
  line-height: 28px;
  color: #ffffff;
  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const LinkTitle = styled.p`
  line-height: 28px;
  color: #ffffff;
  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 28px;
    font-weight: bold;
  }
`;

export const Page = styled.p`
  font-size: 12px;
  line-height: 22px;
  color: #6e767d;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const Description = styled.p`
  line-height: 28px;
  color: #6e767d;
  @media (max-width: 700px) {
    display: none;
  }
`;
