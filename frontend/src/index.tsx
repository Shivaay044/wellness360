import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/provider';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

<ChakraProvider>
  <BrowserRouter>
   <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
  </ChakraProvider>

  

);
