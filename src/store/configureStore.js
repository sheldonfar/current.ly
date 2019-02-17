import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createDebounce from 'redux-debounced'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                createDebounce(),
                thunk,
            )
        )
    )
}