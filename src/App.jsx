import Notice from './components/Header/Notice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Router from './router';
import { useState } from 'react';
import FlashMessage from 'components/Message/FlashMessage';
import MessageContext from 'components/MessageContext';

const App = () => {
  const [flashMessage, setFlashMessage] = useState([]);
  const addFlashMessage = msg => {
    setFlashMessage(prev => prev.concat(msg));
  };

  return (
    <MessageContext.Provider value={addFlashMessage}>
      <div className='App'>
        <Notice />
        <Header />
        <FlashMessage message={flashMessage} />
        <Router addFlashMessage={addFlashMessage} />
        <Footer />
      </div>
    </MessageContext.Provider>
  );
};

export default App;
