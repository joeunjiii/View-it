import React, { useState } from 'react';
import Sidebar from '../maincomponent/Sidebar';
import './Interview.css';

function Interview() {
  const [activeTab, setActiveTab] = useState('일반');
  const [score, setScore] = useState(15);

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const handleNextQuestion = () => {
    // 다음 문제로 넘어가는 로직
    console.log('다음 문제로 이동');
    // 필요시 점수 업데이트나 다른 상태 변경
  };

  const handleEndInterview = () => {
    // 인터뷰 종료 로직
    console.log('인터뷰 종료');
    // 필요시 결과 페이지로 이동
  };

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="logo">LIKEHIT.</div>
            <div className="task-info">작업 1</div>
          </div>
          <button className="end-btn" onClick={handleEndInterview}>
            종료
          </button>
        </header>

        {/* Tab Navigation */}
        <div className="tab-nav">
          <button
            className={`tab-btn ${activeTab === '일반' ? 'active' : ''}`}
            onClick={() => switchTab('일반')}
          >
            일반
          </button>
          <button
            className={`tab-btn ${activeTab === 'Q1' ? 'active' : ''}`}
            onClick={() => switchTab('Q1')}
          >
            Q1
          </button>
        </div>

        {/* Content based on active tab */}
        <div className="tab-content">
          {activeTab === '일반' && (
            <div className="general-content">
              <h2>일반 정보</h2>
              <p>일반 탭의 내용이 여기에 표시됩니다.</p>
            </div>
          )}
          {activeTab === 'Q1' && (
            <div className="q1-content">
              <h2>질문 1</h2>
              <p>첫 번째 질문의 내용이 여기에 표시됩니다.</p>
            </div>
          )}
        </div>

        {/* Audio Content */}
        <div className="audio-content">
          {/* Speaker Audio */}
          <AudioRow
            iconPath="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a1 1 0 01-1-1V9a1 1 0 011-1h1.586a1 1 0 01.707.293l4.5 4.5a1 1 0 01.293.707v1.586a1 1 0 01-1 1H9z"
            waveformId="speaker-waveform"
            label="스피커"
          />

          {/* Microphone Audio */}
          <AudioRow
            iconPath="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v5m0 0H8m4 0h4M12 1a5 5 0 00-5 5v4a5 5 0 0010 0V6a5 5 0 00-5-5z"
            waveformId="mic-waveform"
            label="마이크"
          />

          {/* Score Display */}
          <div className="score-section">
            <div className="score-circle">
              <div className="score-content">
                <div className="score-label">점수</div>
                <div className="score-value">{score}</div>
              </div>
            </div>
            <button className="next-btn" onClick={handleNextQuestion}>
              다음 문제로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AudioRow({ iconPath, waveformId, label }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // 실제 오디오 재생/일시정지 로직 구현
    console.log(`${label} ${isPlaying ? '일시정지' : '재생'}`);
  };

  const handleRecord = () => {
    if (waveformId === 'mic-waveform') {
      setIsRecording(!isRecording);
      console.log(`녹음 ${isRecording ? '중지' : '시작'}`);
    }
  };

  return (
    <div className="audio-row">
      <div className="audio-icon" onClick={handlePlayPause}>
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
        </svg>
        {label && <span className="audio-label">{label}</span>}
      </div>
      <div className="waveform-container">
        <div 
          className={`waveform ${isPlaying ? 'playing' : ''} ${isRecording ? 'recording' : ''}`} 
          id={waveformId}
        >
          {/* 파형 시각화는 여기에 구현 */}
          <div className="waveform-bars">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="bar" style={{height: `${Math.random() * 100}%`}}></div>
            ))}
          </div>
        </div>
      </div>
      {waveformId === 'mic-waveform' && (
        <button 
          className={`record-btn ${isRecording ? 'recording' : ''}`}
          onClick={handleRecord}
        >
          {isRecording ? '중지' : '녹음'}
        </button>
      )}
    </div>
  );
}

export default Interview;