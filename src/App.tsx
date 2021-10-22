import Routes from './routes/routes';
import { GlobalStyle } from './components';

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;

/**
 *  #1 -> git add .
 *  #2 -> git commit -m "add app.tsx file otabek text"
 *  #3 -> git pull origin main
 *  #4 -> git push origin (my-branch)
 *
 *
 * git pull = git fetch + git merge
 */
