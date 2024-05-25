import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in-out;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

// 외부데이터 인터페이스 만들기
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>(
    'allCoins',
    fetchCoins,
    { select: (data) => data.slice(0, 30) }
  );
  // select -> 데이터처리 제한 (30개만 가져오기)

  // console.log(isLoading, data); 로 데이터를 불러오는 상황을 보면
  // true, undefined -> false, [30개의 데이터]로 변하는것을 볼 수 있다!
  // 데이터를 불러오는중이면 true! 완료되면 false! (우리가 loading상태로 직접 지정한것처럼!)
  // 불러오는 중일땐 data가 undefined! 불러오면 데이터 리턴!! (coins 상태값에 지정한것처럼!)
  // 차이점은 코드가 엄청나게 간결해지고 캐시에 데이터를 저장하기때문에 네트워크 요청 감소, 빠른 데이터 접근, 로딩상태관리에 좋다!!

  // 아래 로직이 api.ts에 fetcher 함수와 위의 useQuery한줄로 축약됨 (리액트쿼리의 우수성!)
  // const [coins, setCoins] = useState<CoinInterface[]>([]); -> useQuery에서 data
  // const [loading, setLoading] = useState(true); -> useQuery에서 isLoading
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100)); -> 불러오기가 완료되면 여기에 담았지만 리액트쿼리에선 그걸 data가 해줌
  //     setLoading(false); -> 로딩상태도 마찬가지! 데이터를 다 불러오면 isLoading이 false가 된다!!
  //   })();
  // }, []);

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
