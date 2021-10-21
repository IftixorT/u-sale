import { FC } from 'react';
import { InfoProps } from './info.t';
import { Wrapper } from './info.e';

const Info: FC<InfoProps> = () => {
  return (
    <Wrapper>
      <h1>Info Page</h1>
    </Wrapper>
  );
};

export default Info;
