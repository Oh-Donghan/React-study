import styled from '@emotion/styled';
import PokeNameChip from '../Common/PokeNameChip';
import PokeMarkChip from '../Common/PokeMarkChip';
import { useNavigate } from 'react-router-dom';

const TempImgUrl =  'https://mblogthumb-phinf.pstatic.net/20160722_90/cool911016_1469169937457pEG2Q_JPEG/150519_%C7%C7%C4%AB%C3%F2%C6%E4%C0%CC%C6%DB%C5%E4%C0%CC_%B5%B5%BE%C8_004.jpg?type=w800';

const PokeCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pokemon/피카츄');
  }
  
  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip />
      </Header>
      <Body>
        <Image src={TempImgUrl} alt='포켓몬이미지' />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;

  border: 1px solid #c0c0c0;
  border-radius: 2px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`

const Image = styled.img`
  width: 180px;
  height: 180px;
`

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`

export default PokeCard;
