import '../assets/styles/reset.css';
import '../assets/styles/globals.css';

import { Provider } from 'react-redux';

import { rootStore } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={rootStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
