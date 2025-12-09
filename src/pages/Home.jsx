import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Make My DEV Diary</h1>
      <ul>
        <li>✅ 1. Markdown 렌더링 </li>
        <li>✅ 2. github raw url fetch</li>
        <li>3. 화면 구성도 만들기</li>
        <li>4. 카테고리 세분화</li>
        <li>5. 스타일링</li>
      </ul>

      <button onClick={() => navigate("/post/html/2025-12-09-test")}>
        테스트 글 보기
      </button>
    </>
  );
};

export default Home;
