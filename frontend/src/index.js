import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import {Provider}from 'react-redux';
import store from './store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import  MyScreen from './screens/MyScreen';
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index ={true} path='/'element={<HomeScreen />} />
      <Route path ='/product/:id' element={<MyScreen/>}/>
      <Route path ='/cart' element={<CartScreen/>}/>
      <Route path='/login' element= {<LoginScreen/>}/>
      <Route path='/register' element= {<RegisterScreen/>}/>

      <Route path='' element= {<PrivateRoute/>}>
      <Route path='/Shipping' element= {<ShippingScreen/>}/>
      <Route path='/payment' element= {<PaymentScreen/>}/>
      <Route path='/PlaceOrder' element= {<PlaceOrderScreen/>}/>
      <Route path='/order/:id' element= {<OrderScreen/>}/>
      <Route path='/profile' element= {<ProfileScreen/>}/>
      </Route>
      
      <Route path='' element= {<PrivateRoute/>}>
      <Route path='/Shipping' element= {<ShippingScreen/>}/>
      <Route path='/payment' element= {<PaymentScreen/>}/>
      <Route path='/PlaceOrder' element= {<PlaceOrderScreen/>}/>
      <Route path='/order/:id' element= {<OrderScreen/>}/>
      <Route path='/profile' element= {<ProfileScreen/>}/>
      </Route>
      


    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading= {true}>
      <RouterProvider router={router}/>
      </PayPalScriptProvider>
   </Provider>
  </React.StrictMode>
);


reportWebVitals();
