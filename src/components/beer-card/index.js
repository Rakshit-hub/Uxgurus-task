import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../../elements/image";
import Lockup from "../lockup";
import Like from "./like-button";

const BeerCard = styled.div`
  margin-bottom: 30px;
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: rgb(0 0 0 / 11%) 0px 1px 6px 1px;
  background: #efefef;

  @media ${device.laptop} {
    width: 30%;
  }
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;

  margin-top: auto;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
  position: relative;
`;

function Beercard(props) {
  const [active, setActive] = useState(false);

  const changeLike = () => {
    setActive(!active);
    if (!active) {
      alert(`You liked ${props.title}`);
    }
  };

  return (
    <BeerCard>
      <ImagContainer>
        <Image url={props.image} />
      </ImagContainer>

      <Content>
        <Like liked={active} changeLike={changeLike} />
        <Lockup text={props.description} tag="h3" title={props.title} />
      </Content>
    </BeerCard>
  );
}

export default Beercard;
