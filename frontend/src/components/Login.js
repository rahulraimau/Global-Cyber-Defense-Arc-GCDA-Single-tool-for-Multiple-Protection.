import React, { useState } from 'react';
import axios from 'axios';
export default function Login(){const [email,setEmail]=useState('');const [pass,setPass]=useState('');const doLogin=()=>{axios.post('/api/auth/login',{email, password: pass}).then(r=>{alert('Logged in (token)');}).catch(e=>alert('Login failed'))}return (<div><h2>Login</h2><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} /><input placeholder='password' type='password' value={pass} onChange={e=>setPass(e.target.value)} /><button onClick={doLogin}>Login</button></div>)} 
