import styled from "@emotion/styled";

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  @media (max-width: 700px) {
    width: 48px;
    height: 48px;
  }
`;

export const Wallpaper = styled.img`
  width: 160px;
  height: 144px;
  border-radius: 24px 0px 0px 24px;
  @media (max-width: 700px) {
    width: 92px;
    height: 82.8px;
    border-radius: 13.8px 0px 0px 13.8px;
  }
`;

export const Icon = styled.img`
  @media (max-width: 700px) {
    width: 35px;
  }
`;
