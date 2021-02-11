import React,{useEffect,useState} from 'react';
import './App.css';
import {breakPoints} from './device-breakpoints'
import DeviceInfo from './DeviceInfo'
import {fetchUser} from './Network/ApiCallsHandler'
import {isEmpty} from 'lodash'
import { UserContext } from './contexts/userContexts';

function App() {
  const fetchAuth = async () => {
    const user = await fetchUser();
    const logged_in = !isEmpty(user) ?user:false;
    setLogin(logged_in)
  }
  const [logged_in,setLogin] = useState(false);
  useEffect(() => {
    fetchAuth()
    return () => {
    }
  }, [])
  return (
    <UserContext.Provider value = {logged_in}>
      <DeviceInfo breakPoints = {breakPoints} logged_in = {logged_in}/>
    </UserContext.Provider>
  );
}

export default App;
