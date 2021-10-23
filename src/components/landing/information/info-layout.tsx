import React, { FC } from 'react';
import { InfoTitle, InfoWrapper, InfoText, InfoP, InfoLink, InfoImgWrap, InfoImg } from './information.e';
import { InformationProps } from "./information.t";
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoLayout: FC<InformationProps> = ({title, description, imgURL, isReverse}) => {
   return (
      <InfoWrapper /* isReverse={isReverse} */>
         <InfoText>
            <InfoTitle> 
               {title}  
            </InfoTitle>
            <InfoP>
               {description}
            </InfoP>
            <InfoLink>
               Learn More
            </InfoLink>
         </InfoText>
         <InfoImgWrap>
            <InfoImg src={require(`./../../../assets/images/information/${imgURL}`).default} alt="info" />
         </InfoImgWrap>
      </InfoWrapper>
   ) 
}

export default InfoLayout;