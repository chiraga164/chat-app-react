import { ChatEngine } from 'react-chat-engine';

import './App.css';

const projectID = '1b1446af-8eeb-4531-a87e-63ccc4d0bcd0';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Kingfire"
      userSecret="cS@131013"
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;