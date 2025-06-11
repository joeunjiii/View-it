import React, { useState } from "react";
import InterviewSettingsModal from "./InterviewSettingModal";
import "./Interview.css";

function Interview() {
  const [showModal, setShowModal] = useState(true); // 초기엔 모달 열림

  const handleStart = (settings) => {
    console.log("시작 설정:", settings);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <InterviewSettingsModal
          onClose={() => setShowModal(false)}
          onStart={handleStart}
        />
      )}

      {!showModal && (
        <div className="interview-wrapper">
          {/* 상단 섹션 */}
          <div className="interview-header">
            <div className="header-left">
              남은 시간 <strong>9:56</strong>
            </div>
            <button className="end-button">종료하기</button>
          </div>

          {/* 본문 섹션 */}
          <div className="interview-section-body">
            {/* 질문 탭 */}
            <div className="question-tabs">
              <button className="tab selected">질문</button>
              <button className="tab">Q1</button>
            </div>

            {/* 음성 파형 + 타이머 */}
            <div className="interview-body">
              <div className="voice-section">
                <div className="voice-item">
                  <span className="icon robot"></span>
                  <div className="waveform" />
                  나중에 파형추가
                </div>
                <div className="voice-item">
                  <span className="icon mic"></span>
                  <div className="waveform" />
                  나중에 파형추가
                </div>
              </div>

              <div className="timer-wrapper">
                <div className="timer-circle">
                  <p>답변시간</p>
                  <strong>15</strong>
                </div>
                <button className="replay-button">다시 답변하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Interview;
