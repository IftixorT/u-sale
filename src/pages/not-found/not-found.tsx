import { FC } from 'react';
import { NotFoundProps } from './not-found.t';

const NotFound: FC<NotFoundProps> = ({ history }) => {
  const { replace } = history;
  return (
    <>
      <h1>Page Not Found</h1>
      <button onClick={() => replace('/')}>Go to home</button>
    </>
  );
};

export default NotFound;
