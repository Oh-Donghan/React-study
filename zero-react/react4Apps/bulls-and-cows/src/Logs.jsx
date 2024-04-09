import PropTypes from 'prop-types';
// 소문자로 작성한 컴포넌트는 리액트에서 DOM태그로 인식한다
// ex) div, span, ol, li
// 따라서 컴포넌트 명은 대문자로 시작해야함!

const Logs = (props) => {
  return (
    <>
      <h2>기록</h2>
      <ol>
        {props.logs.map((log, index) => {
          return <li key={`${log}_${index}`}>{log}</li>;
        })}
      </ol>
    </>
  );
};

// npm install prop-types 의존성 설치
Logs.propTypes = {
  logs: PropTypes.array.isRequired,
};

export default Logs;
