import { useEffect, useState } from "react";
import { fetchReservationNotices } from "../../api/notice/fetchReservationNotices";
import { fetchReservationNoticesDto } from "../../api/notice/dto/fetchReservationNoticesDto";
import { Link } from "react-router-dom";

const Notice = () => {
  const [notices, setNotices] = useState<fetchReservationNoticesDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNotices = async () => {
      try {
        const data =
          (await fetchReservationNotices()) as fetchReservationNoticesDto[];
        setNotices(data);
      } catch (err) {
        console.error(err);
        setError("공지 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getNotices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  const importantNotices = notices.filter((n) => !n.type);
  const generalNotices = notices.filter((n) => n.type);

  return (
    <div className="min-h-screen bg-gray/20 p-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">공지사항</h1>
          <p className="text-gray-600">
            [{import.meta.env.VITE_BUILDING_NAME}{" "}
            {import.meta.env.VITE_ROOM_NUMBER || "101호"}]의 공지사항을
            확인하세요
          </p>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="bg-white rounded-lg shadow-md">
          {error ? (
            <div className="p-8 text-center text-red-600">{error}</div>
          ) : notices.length > 0 ? (
            <>
              {/* 중요 공지 */}
              {importantNotices.length > 0 && (
                <div className="border-b border-gray-200">
                  {importantNotices.map((notice) => (
                    <Link
                      to={`/notice/${notice.id}`}
                      key={notice.id}
                      className="block hover:bg-purple/5 transition-all duration-200"
                    >
                      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-4">
                          <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-sm font-semibold">
                            중요
                          </span>
                          <span className="text-lg font-medium">
                            {notice.title}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {notice.created_at}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* 일반 공지 */}
              {generalNotices.map((notice) => (
                <Link
                  to={`/notice/${notice.id}`}
                  key={notice.id}
                  className="block hover:bg-gray-50 transition-all duration-200"
                >
                  <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        일반
                      </span>
                      <span className="text-lg">{notice.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {notice.created_at}
                    </span>
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <div className="p-8 text-center text-gray-500">
              공지사항이 없습니다.
            </div>
          )}
        </div>

        {/* 뒤로가기 버튼 */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            <span className="mr-2">←</span>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notice;
