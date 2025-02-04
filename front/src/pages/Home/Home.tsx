import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 상단 영역 */}
      <section className="bg-white shadow-md h-20 mb-4">
        <Section1 />
      </section>

      {/* 하단 영역 - 좌우 레이아웃 */}
      <div className="flex-1 flex">
        {/* 좌측: 이용 시간표 */}
        <section className="bg-gray-50 p-6 shadow-md w-4/5 mr-4">
          <Section2 />
        </section>

        {/* 우측: 강의실 예약 */}
        <section className="bg-white shadow-md p-6 w-1/5">
          <Section3 />
        </section>
      </div>
    </div>
  );
};

export default Home;
