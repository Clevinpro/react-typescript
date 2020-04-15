import * as React from 'react';
import Home from './containers/Home'
import {
  Switch,
  Route,
} from 'react-router-dom';

interface Props {
  moveObjects(position: null | {}): void;
  angle: number;
  gameState: {};
  startGame: boolean;
}

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
