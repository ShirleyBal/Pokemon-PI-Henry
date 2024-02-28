import React from 'react'
import ReactDOM from 'react-dom'
import store from './Redux/Store/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     {/* </Provider> */}
//   </React.StrictMode>,
// )

//Por la version que tengo tuve que poner el render

ReactDOM.render(
  <Provider store= {store} >
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);