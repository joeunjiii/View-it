
import SectionHeader from './SectionHeader';
import RecentSection from './RecentSection';
import { FaUsers, FaMicrophone } from 'react-icons/fa';
import './css/Maincontent.css';

function MainContent() {
    return (
        <div className="main-content">
            <header className="main-header">
                <h1>대충 모의 면접 소개글</h1>
                <div className="placeholder-box">
                    디자인 수정예정
                </div>
            </header>

            <div className="content-section">
                <SectionHeader />

                <div className="cards-container">
                    <div className="card">
                        <div className="card-icon"><FaUsers /></div>
                        <div className="card-title">모의면접</div>
                    </div>
                    <div className="card">
                        <div className="card-icon"><FaMicrophone /></div>
                        <div className="card-title">스피치 연습</div>
                    </div>
                </div>

                <RecentSection />

                <div className="feedback-section">
                    <div className="feedback-icon"><FaUsers /></div>
                    <div className="feedback-text">이렇게 발표하는건 어떨까요?</div>
                </div>

                <div className="feedback-list">
                    <div className="feedback-card" onClick={() => alert("피드백 1 클릭됨")}>
                        수정예정
                    </div>
                    <div className="feedback-card" onClick={() => alert("피드백 2 클릭됨")}>
                        수정예정
                    </div>
                    <div className="feedback-card" onClick={() => alert("피드백 3 클릭됨")}>
                        수정예정
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
