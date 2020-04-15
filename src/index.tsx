import React from 'react';
import {render} from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from '@/App';
import { RootStore, configureStore, history } from './store';
import 'normalize.css';
import './index.css';

export const store: Store<RootStore> = configureStore();

const node: HTMLElement | null = document.getElementById('app');
const renderRoot = (app: JSX.Element): void => render(app, node);

const router = (Application: any): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>
);

renderRoot(router(App));

if (module.hot) {
	module.hot.accept();

	renderRoot(router(App));
}