import ReactDOM from 'react-dom';
import React from 'react';
/* API para permitir o React ter urls amigáveis
    com history API nativa do navegador
 */
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
/* Biblioteca redux para geranciar os dados */
import { createStore, combineReducers } from 'redux';
/* cola com react */
import { Provider } from 'react-redux';
/* cola entre os tres */
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducer from 'feedbacks.js'

import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from 'base.jsx';
import Search from 'search.jsx';
import Feedbacks from 'feedbacks.jsx';
import Invites from 'invites.jsx';

injectTapEventPlugin();

/* Comina os reducers de terceiros e os nossos */
const reducers = combineReducers({
	routing: routerReducer,
	feedbacks: reducer,
});

/* Cria o Store que gerenciarar os dados compartilhados da APP inteira */
  const store = createStore(
    reducers,
);

class Root extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={Base}>
						<IndexRedirect to="/feedbacks" />
						<Route path="/search" component={Search} />
						<Route path="/feedbacks" component={Feedbacks} />
						<Route path="/invites" component={Invites} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('app'));
