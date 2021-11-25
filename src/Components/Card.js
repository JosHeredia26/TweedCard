import avatar from "../static/images/avatar.png";
import gallery from "../static/images/gallery.png";
import heart from "../static/icons/heart.svg";
import pinkheart from "../static/icons/pinkheart.svg";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  width: 700px;
  height: 447.54px;

  border: 1px solid #6e767d;
  box-sizing: border-box;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  width: 572px;
  height: 399.54px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Comment = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: start;

  color: #ffffff;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const Username = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;

  color: #ffffff;
`;

const Mail = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  color: #6e767d;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;

  width: 572px;
  height: 144px;

  border: 1px solid #6e767d;
  box-sizing: border-box;
  border-radius: 24px;
`;

const LinkDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 0px 0px;
  gap: 8px;
`;

const LinkTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  color: #ffffff;
`;

const LinkContent = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: start;

  color: #6e767d;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 85.23px;
  height: 47.54px;
`;

const Likes = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  color: #6e767d;
`;

function Card() {
  const [color, setColor] = useState(false);
  function colorize() {
    setColor(!color);
  }

  return (
    <Container>
      <Avatar src={avatar} alt="" />
      <CardInfo>
        <CommentContainer>
          <UserData>
            <Username>LeonidasEsteban.css</Username>
            <Mail>@LeonidasEsteban·2h</Mail>
          </UserData>
          <Comment>
            Los retos de esta semana de /Proyectos son totalmente gratis, crea
            una sección de pricing y una galería de fotos
            https://leonidasesteban.com/proyectos/cards-precios
            https://leonidasesteban.com/proyectos/grid-gallery estos los puedes
            hacer en 100% solo con HTML y CSS
          </Comment>
        </CommentContainer>
        <LinkContainer>
          <img src={gallery} alt="" />
          <LinkDescription>
            <LinkTitle>Grid Gallery</LinkTitle>
            <LinkContent>
              Practica tus habilidades de Grid CSS con este ejercicio de las
              capitales del mundo.
            </LinkContent>
          </LinkDescription>
        </LinkContainer>
        <LikeContainer>
          <img src={color ? pinkheart : heart} alt="" onClick={colorize} />
          <Likes>250</Likes>
        </LikeContainer>
      </CardInfo>
    </Container>
  );
}

export default Card;
