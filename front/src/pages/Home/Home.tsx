import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";

const Home: React.FC = () => {
  return (
    <>
      {/* Section1: 현재 상태 */}
      <Section1 />

      {/* Section2: 이용 시간표 */}
      <Section2 />

      {/* Section3: 강의실 예약 */}
      <Section3 />
    </>
  );
};

export default Home;
