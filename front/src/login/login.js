import './login.css';

function App() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>대충 로고 위치</h2>
        <button className="naver-button" onClick={() => window.location.href = '네이버_로그인_URL'}>
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/c9/ec/aec9ecca-cdbc-0de4-d0bb-2dc45cb43373/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/230x0w.webp"
            alt="Naver"
            className="naver-icon"
          />
          네이버로 로그인
        </button>
      </div>
    </div>
  );
}

export default App;
