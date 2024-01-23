import GoBackBtn from '@/assets/GoBack.svg?react';
import FormCard from '@/components/FormCard';
import { flexCenter } from '@/styles/common.style';
import { useNavigate } from 'react-router-dom';
import CreateForm from './components/CreateForm';

const CreateBattlePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-[100px]">
      <div onClick={() => navigate('/main')}>
        <GoBackBtn />
      </div>
      <div className={`${flexCenter}`}>
        <img src="../../../public/Logo.png" className="w-[600px] m-[40px]" />
      </div>
      <FormCard size="large" label="배틀 생성">
        <CreateForm />
      </FormCard>
    </div>
  );
};

export default CreateBattlePage;
