import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReservationNoticeDetail } from "../../api/notice/fetchReservationNoticeDetail";
import { fetchReservationNoticeDetailDto } from "../../api/notice/dto/fetchReservationNoticeDetailDto";
import { ChevronLeft } from "lucide-react";

const NoticeDetail = () => {
  const { noticeId } = useParams();
  const [notice, setNotice] = useState<fetchReservationNoticeDetailDto | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!noticeId) return;

    fetchReservationNoticeDetail(noticeId)
      .then((data) => {
        setNotice(data);
        setLoading(false);
      })
      .catch(() => {
        setError("공지사항을 불러오는 데 실패했습니다.");
        setLoading(false);
      });
  }, [noticeId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-screen bg-gray/20 p-8">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Link
            to="/notice"
            className="inline-flex items-centerpy-2 hover:text-purple transition-all duration-200"
          >
            <ChevronLeft size={30} />
          </Link>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="bg-white rounded-lg shadow-md flex-1 flex flex-col min-h-0">
          {error ? (
            <div className="p-8 text-center text-red">{error}</div>
          ) : notice ? (
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold ${
                      notice.type === false
                        ? "bg-purple/10 text-purple"
                        : "bg-gray/50"
                    }`}
                  >
                    {notice.type === false ? "중요" : "일반"}
                  </span>
                  <h2 className="text-2xl font-bold">{notice.title}</h2>
                </div>
                <p className="text-black/50">
                  {new Date(notice.created_at).toLocaleDateString()}
                </p>
              </div>
              <hr className="border-t border-gray mb-6" />
              <div className="text-black whitespace-pre-wrap leading-relaxed flex-1 overflow-auto">
                {notice.contents}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              공지사항을 찾을 수 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
