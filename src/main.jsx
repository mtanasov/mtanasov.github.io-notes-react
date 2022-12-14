import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
// import "./"
import "../src/styleMediaLESS1080.css"
// import storeArchive from "./reduxSlice/storeArchive"
import { store } from './reduxSlice/store'
import { Provider } from 'react-redux'

import { Header } from "./components/header/Header"
import { Content } from "./components/content/Content"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='main'>
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  </div>
)
