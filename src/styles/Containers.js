import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 24px;
  gap: 16px;
  border: 1px solid #6e767d;
  @media (max-width: 700px) {
    width: 100%;
    padding: 16px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 572px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserData = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 16px;
  border: 1px solid #6e767d;
  border-radius: 24px;
  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

export const LinkDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0px 0px;
  gap: 8px;
  @media (max-width: 700px) {
    gap: 0px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 700px) {
    gap: 0px;
  }
`;
