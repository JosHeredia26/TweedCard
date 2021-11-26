import avatar from "../static/images/avatar.png";
import gallery from "../static/images/gallery.png";
import heart from "../static/icons/heart.svg";
import pinkheart from "../static/icons/pinkheart.svg";
import {
  CardInfo,
  CommentContainer,
  Container,
  LikeContainer,
  LinkContainer,
  LinkDescription,
  UserData,
} from "../styles/Containers";
import {
  Description,
  GreyText,
  LinkTitle,
  Page,
  WhiteText,
} from "../styles/Texts";
import { Avatar, Wallpaper, Icon } from "../styles/Images";
import { useState } from "react";

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
              JoseHeredia.css
            </WhiteText>
            <GreyText>@JoseHeredia·2h</GreyText>
          </UserData>
          <WhiteText>
            Los retos de esta semana de /Proyectos son totalmente gratis, crea
            una sección de pricing y una galería de fotos &nbsp;
            <a href="joseheredia.com/proyectos/cards-precios">
              https://joseheredia.com/proyectos/cards-precios
            </a>
            &nbsp;{" "}
            <a href="joseheredia.com/proyectos/grid-gallery">
              https://joseheredia.com/proyectos/grid-gallery
            </a>
            &nbsp;estos los puedes hacer en 100% solo con HTML y CSS
          </WhiteText>
        </CommentContainer>
        <LinkContainer>
          <Wallpaper src={gallery} alt="" />
          <LinkDescription>
            <LinkTitle>Grid Gallery</LinkTitle>
            <Description>
              Practica tus habilidades de Grid CSS con este ejercicio de las
              capitales del mundo.
            </Description>
            <Page>joseheredia.com</Page>
          </LinkDescription>
        </LinkContainer>
        <LikeContainer>
          <Icon src={color ? pinkheart : heart} alt="" onClick={colorize} />
          <GreyText style={{ color: color ? "#F72381" : "" }}>{likes}</GreyText>
        </LikeContainer>
      </CardInfo>
    </Container>
  );
}

export default Card;
