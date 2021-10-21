import { FC } from 'react';
import { PersonalInfoProps } from './personal-info.t';
import { Wrapper } from './personal-info.e';

const PersonalInfo: FC<PersonalInfoProps> = () => {
  return (
    <Wrapper>
      <h1>PersonalInfo Page</h1>
    </Wrapper>
  );
};

export default PersonalInfo;
