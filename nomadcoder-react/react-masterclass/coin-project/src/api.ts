import axios from 'axios';

// axios로 비동기처리 하기
export const fetchCoins = async () => {
  return await axios
    .get('https://api.coinpaprika.com/v1/coins')
    .then((response) => response.data);
};

// promise로 비동기처리 하기
// export function fetchCoins() {
//   return fetch('https://api.coinpaprika.com/v1/coins').then((response) =>
//     response.json()
//   );
// }
