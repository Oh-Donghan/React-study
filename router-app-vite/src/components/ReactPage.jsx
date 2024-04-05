import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  const [number, setNumber] = useState(0);

  async function fetcher(url) {
    const result = await axios.get(url);

    console.log(result.data); // 상태값
    return result.data;
  }

  const { data: docs, error } = useSWR('posts', () =>
    fetcher('https://jsonplaceholder.typicode.com/posts')
  );

  // const docs = [
  //   {
  //     id: 1,
  //     title: 'React 공부를 시작하면서',
  //     date: '05/01/2021',
  //   },
  //   {
  //     id: 2,
  //     title: 'CRA 없이 리액트 프로젝트 시작하기',
  //     date: '12/01/2021',
  //   },
  //   {
  //     id: 3,
  //     title: '이제는 사용해보자 useMemo & useCallback',
  //     date: '31/01/2021',
  //   },
  //   {
  //     id: 4,
  //     title: 'React 프로젝트에 Prettier 적용하기',
  //     date: '15/02/2021',
  //   },
  //   {
  //     id: 5,
  //     title: 'React의 setState() 제대로 사용하기',
  //     date: '28/02/2021',
  //   },
  // ];

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       'https://jsonplaceholder.typicode.com/posts'
  //     );
  //     // const result = await res.json();
  //     console.log(result.data); // 상태값
  //     setDocs(result.data);
  //   }
  //   fetchData();
  // }, []);

  if (error) return <div>failed to load</div>;
  if (!docs) return <div>loading...</div>;

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: 'block', margin: '1rem 0' }}
        >
          {doc.title}
        </Link>
      ))}
      {/* <Outlet /> */}
    </div>
  );
}
