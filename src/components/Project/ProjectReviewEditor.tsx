import { useState } from 'react';
import CreateButton from '../commons/CreateButton';
import Modal from '../commons/Modal';
import Search from '../../assets/imgs/Search.svg';
import ProjectFormSection from './ProjectFormSection';
import ProjectFormToggle from './ProjectFormToggle';
import DeleteBtn from '../../assets/imgs/DeleteBtn.svg';

interface ProjectReviewEditorProps {
  reviews: { name: string; content: string }[];
  setReviews: (value: object) => void;
}

const ProjectReviewEditor = ({ reviews, setReviews }: ProjectReviewEditorProps) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const handleAddReview = () => {
    if (reviewName && reviewContent)
      setReviews([...reviews, { name: reviewName.trim(), content: reviewContent.trim() }]);
    setReviewName('');
    setReviewContent('');
    setIsReviewModalOpen(false);
  };
  const handleDeleteReview = (review: { name: string; content: string }) => {
    setReviews(
      reviews.filter(
        (currentReview) =>
          currentReview.name !== review.name || currentReview.content !== review.content
      )
    );
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-28">
        <div className="flex justify-between items-center">
          <ProjectFormSection title="프로젝트 참여 후기를 등록해주세요." />
          <CreateButton onClick={() => setIsReviewModalOpen(true)}>추가하기</CreateButton>
        </div>
        {reviews.length > 0 ? (
          <div className="w-full flex flex-col gap-28">
            {reviews.map((review) => (
              <div className="w-full flex gap-28 items-start">
                <img
                  src={DeleteBtn}
                  alt="리뷰 지우는 버튼"
                  onClick={() => handleDeleteReview(review)}
                />
                <div className="w-full flex flex-col gap-16">
                  <ProjectFormToggle
                    toggleText={review.name}
                    onClick={() => handleDeleteReview(review)}
                  />
                  <div className="max-w-full break-all h-auto text-start box-border rounded-10 border-2 border-solid border-border bg-gray px-20 py-20 text-white text-24 font-400">
                    {review.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span className="pt-72 text-deepGray text-32 font-600">등록된 참여 후기가 없습니다.</span>
        )}
      </div>
      <Modal
        isOpen={isReviewModalOpen}
        onClick={handleAddReview}
        onClose={() => setIsReviewModalOpen(false)}
      >
        <div className="w-full flex flex-col gap-44">
          <p className="w-full text-white text-36 font-700 text-start">
            프로젝트 참여 후기를 등록해주세요.
          </p>
          <div className="w-full flex flex-col gap-28">
            <div className="w-full flex flex-col gap-12">
              <span className="text-white text-24 font-700 text-start">이름</span>
              <div className="relative flex items-center w-full rounded-10 border-2 border-solid border-border bg-gray px-24 py-20">
                <input
                  value={reviewName}
                  type="text"
                  className="w-full h-full text-white text-24 font-400"
                  onChange={(e) => setReviewName(e.target.value)}
                />
                <img src={Search} className="" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-12">
              <span className="text-white text-24 font-700 text-start">참여 후기</span>
              <div className="w-full h-auto">
                <div className="relative flex items-center w-full rounded-10 border-2 border-solid border-border bg-gray px-24 py-20">
                  <textarea
                    value={reviewContent}
                    maxLength={500}
                    className="w-full h-232 text-white text-24 font-400"
                    onChange={(e) => setReviewContent(e.target.value)}
                  ></textarea>
                  <span className="absolute right-16 bottom-12 text-white">
                    {reviewContent.length} / 500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectReviewEditor;
