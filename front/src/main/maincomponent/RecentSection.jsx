import { FaRegFileAlt } from "react-icons/fa";
import './recentsection.css';

function RecentSection() {


  //임시데이터
  const mockResults = [
    { id: 1, date: "2025-06-03", score: 85, summary: "톤 안정적이고 전달력 좋음" },
    { id: 2, date: "2025-06-02", score: 78, summary: "속도 약간 빠름, 결론 명확함" },
  ];

  return (
    <div className="Recent-section">
      <div className="Recent-header">
        <FaRegFileAlt className="Recent-icon" />
        <h3>최근 모의면접 결과</h3>
      </div>

      <div className="Recent-list">
        {mockResults.map((item, index) => {
          const [year, month, day] = item.date.split("-");
          return (
            <div className="Recent-card" key={item.id}>
              <div className="Recent-date">{`${year}년 ${month}월 ${day}일`}</div>
              <div className="Recent-label">결과 {index + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentSection;
