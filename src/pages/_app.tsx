import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import challenges from '../../challenges.json';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )



}

export default MyApp
