import { useQuery } from 'react-query';
import { fetchCoinTickers } from '../api';
import { useOutletContext } from 'react-router-dom';
import { ChartProps } from './Chart';
import { PriceData } from './Coin';
import styled from 'styled-components';

export default function Price() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<PriceData>(['prices', coinId], () =>
    fetchCoinTickers(coinId)
  );

  return (
    <div>
      <div>
        {isLoading ? (
          'Loading...'
        ) : (
          <Overview>
            <OverviewItem>
              <span>{data?.quotes.USD.ath_price}</span>
            </OverviewItem>
            <OverviewItem>
              <span>{data?.quotes.USD.percent_change_12h}</span>
            </OverviewItem>
            <OverviewItem>
              <span>{data?.quotes.USD.percent_change_15m}</span>
            </OverviewItem>
          </Overview>
        )}
      </div>
    </div>
  );
}

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
`;
