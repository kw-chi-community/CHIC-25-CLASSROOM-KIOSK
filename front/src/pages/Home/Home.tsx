import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-gray/20 flex flex-col p-6">
      {/* 상단 영역 */}
      <section className="bg-white shadow-md h-[80px] mb-6 rounded-lg">
        <Section1 />
      </section>

      {/* 하단 영역 - 좌우 레이아웃 */}
      <div className="flex-1 flex min-h-0">
        {/* 좌측: 이용 시간표 */}
        <section className="bg-white p-6 shadow-md w-4/5 mr-6 rounded-lg">
          <Section2 />
        </section>

        {/* 우측: 강의실 예약 */}
        <section className="bg-white shadow-md p-4 w-1/5 rounded-lg">
          <Section3 />
        </section>
      </div>
    </div>
  );
};

export default Home;
