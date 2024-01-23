// import Button from '@/components/Button';
// import FormCard from '@/components/FormCard';
// import LoginInput from '@/components/LoginInput';
// import { flexCenter } from '@/styles/common.style';

// const SignIn: React.FC = () => {
//   const inputLabelArr = ['아이디', '비밀번호'];

//   return (
//     <>
//       <FormCard label="로그인" size="small">
//         <div className={`${flexCenter} justify-evenly w-[732px] h-[460px]`}>
//           {inputLabelArr.map((el, idx) => (
//             <LoginInput key={idx} bgColor="gray" size="large" label={el} />
//           ))}
//           <Button bgColor="gray" size="large" radius="round" fontSize="large">
//             로그인
//           </Button>
//         </div>
//       </FormCard>
//     </>
//   );
// };

// export default SignIn;

import React from 'react';
import Button from '@/components/Button';
import FormCard from '@/components/FormCard';
import LoginInput from '@/components/LoginInput';
import { flexCenter } from '@/styles/common.style';
import { useForm } from 'react-hook-form';

interface FormValue {
  id: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmitHandler = (data: FormValue) => {
    console.log(data);
  };

  return (
    <FormCard label="로그인" size="small">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={`${flexCenter} justify-evenly w-[732px] h-[460px]`}
      >
        <div>
          <LoginInput
            {...register('id', {
              required: '아이디를 입력해 주세요',
              minLength: {
                value: 2,
                message: '아이디는 최소 2글자는 입력해야합니다',
              },
              maxLength: {
                value: 10,
                message: '아이디는 최대 10글자까지만 가능합니다',
              },
            })}
            bgColor="gray"
            size="large"
            label="아이디"
          />
          {errors.id && <p className="error-message">{errors.id.message}</p>}
        </div>
        <div>
          <LoginInput
            {...register('password', {
              required: '비밀번호를 입력해 주세요',
              minLength: {
                value: 8,
                message: '비밀번호는 최소 8자 이상이어야 합니다',
              },
              maxLength: {
                value: 16,
                message: '비밀번호는 최대 16자까지만 가능합니다',
              },
            })}
            bgColor="gray"
            size="large"
            label="비밀번호"
            type="password"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <Button
          bgColor="gray"
          size="large"
          radius="round"
          fontSize="large"
          type="submit"
        >
          로그인
        </Button>
      </form>
    </FormCard>
  );
};

export default SignIn;
