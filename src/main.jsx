import React from 'react'
import { createRoot } from 'react-dom/client'
import App  from "../src/App"
import store from "./Redux/Store"
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(<Provider store={store}><App/></Provider>)
