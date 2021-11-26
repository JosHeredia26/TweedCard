import avatar from "../static/images/avatar.png";
import gallery from "../static/images/gallery.png";
import heart from "../static/icons/heart.svg";
import pinkheart from "../static/icons/pinkheart.svg";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  CardInfo,
  CommentContainer,
  Container,
  LikeContainer,
  LinkContainer,
  LinkDescription,
  UserData,
} from "../Styles/Containers";
import { GreyText, WhiteText } from "../Styles/Texts";
import { Avatar, Wallpaper } from "../Styles/Images";

function Card() {
  const [color, setColor] = useState(false);
  const [likes, setLikes] = useState(250);
  function colorize() {
    setColor(!color);
    setLikes(color ? likes - 1 : likes + 1);
  }

  return (
    <Container>
      <Avatar src={avatar} alt="" />
      <CardInfo>
        <CommentContainer>
          <UserData>
            <WhiteText style={{ fontWeight: "bold" }}>
              LeonidasEsteban.css
            </WhiteText>
            <GreyText>@LeonidasEsteban·2h</GreyText>
          </UserData>
          <WhiteText>
            Los retos de esta semana de /Proyectos son totalmente gratis, crea
            una sección de pricing y una galería de fotos &nbsp;
            <a href="leonidasesteban.com/proyectos/cards-precios">
              https://leonidasesteban.com/proyectos/cards-precios
            </a>
            &nbsp;{" "}
            <a href="leonidasesteban.com/proyectos/grid-gallery">
              https://leonidasesteban.com/proyectos/grid-gallery
            </a>
            &nbsp;estos los puedes hacer en 100% solo con HTML y CSS
          </WhiteText>
        </CommentContainer>
        <LinkContainer>
          <Wallpaper src={gallery} alt="" />
          <LinkDescription>
            <WhiteText>Grid Gallery</WhiteText>
            <GreyText>
              Practica tus habilidades de Grid CSS con este ejercicio de las
              capitales del mundo.
            </GreyText>
          </LinkDescription>
        </LinkContainer>
        <LikeContainer>
          <img src={color ? pinkheart : heart} alt="" onClick={colorize} />
          <GreyText style={{ color: color ? "#F72381" : "" }}>{likes}</GreyText>
        </LikeContainer>
      </CardInfo>
    </Container>
  );
}

export default Card;
