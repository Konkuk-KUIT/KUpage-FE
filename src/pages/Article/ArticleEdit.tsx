import { ArticleFormData } from '../../components/ArticleForm/ArticleFormFields';
import { ArticleEditForm } from '../../components/ArticleForm/ArticleEditForm';

// Mock data for testing
const mockData: ArticleFormData = {
  title: '샘플 제목',
  blocks: [],
};

const ArticleEdit = () => {
  return <ArticleEditForm defaultValues={mockData} />;
};

export default ArticleEdit;
