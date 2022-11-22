import logoInstagram from '../../../src/assets/Instagram_logo.svg.png';
import logoFacebook from '../../../src/assets/facebook-login.png';
import logoGooglePlay from '../../../src/assets/googleplay-icon.png';
import logoMicrosoft from '../../../src/assets/microsoft-icon.png';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook} from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from '../Home';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const createNumberRandom  = Math.random() * 5;
    const numberRandom = createNumberRandom.toString();

    const tokenGet = localStorage.getItem('token');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithFacebook] = useSignInWithFacebook(auth);

    async function LoginFacebook(event: React.MouseEvent) {
        event.preventDefault()

        if(await signInWithFacebook()) {
            navigate('/home')
            localStorage.setItem('key', numberRandom)
            window.location.reload()
        }
    }

    async function handleSignIn(event: React.FormEvent) {
        event.preventDefault()

        const createUser = await signInWithEmailAndPassword(email, password);

        if(createUser) {
            navigate('/home')
            localStorage.setItem('key', numberRandom)
            window.location.reload()
        } else {
            return alert('Usuário ou Senha incorretos.')
        }
    }

    if(loading) {
        return <Home />
    }

    return (
        <div className="flex justify-center items-center h-screen">
            {tokenGet ? <h1>Rota Privada</h1> : 
            <>
            <div className="h-3/5 w-width-image bg-phone-instagram"></div>
            <div className='flex flex-col'>
                <form onSubmit={handleSignIn}>
                    <div className="flex flex-col h-height-login w-width-login bg-login-instagram border border-slate-300">
                        <img src={logoInstagram} className="p-10 w-64 ml-10" alt="instagramlogo" />
                        <div className='flex items-center flex-col justify-center'>
                            <input className='border border-slate-300 w-[270px] h-10 outline-none bg-slate-50 p-2 text-xs' required={true} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Telefone, nome de usuário ou email" />
                            <input className='border border-slate-300 w-[270px] h-10 outline-none bg-slate-50 p-2 mt-2 text-xs'required={true} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
                            <div className='flex justify-center items-center cursor-pointer'>
                                <button className='h-8 w-[270px] bg-blue-500 mt-3 rounded-[5px] text-white font-semibold text-[15px] cursor-pointer disabled:opacity-50' disabled={email && password != "" ? false : true} type='submit'>Entrar</button>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='border border-slate-300 w-28 mt-3 mr-3'></div>
                                <span className='text-slate-400 mt-3 text-xs'>OU</span>
                                <div className='border border-slate-300 w-28 mt-3 ml-3'></div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer'>
                                <img src={logoFacebook} alt="logofacebook" className='h-4 w-4 mt-5' />
                                <span className='text-sm mt-5 ml-2 text-blue-800 font-semibold' onClick={LoginFacebook}>Entrar com o facebook</span>
                            </div>
                            <span className='text-xs mt-4 text-blue-900 cursor-pointer'>Esqueceu a senha?</span>
                        </div>
                    </div>
                </form>
                <div className='flex items-center justify-center mt-3 w-full h-16 bg-login-instagram border border-slate-300'>
                    <Link to="/register">
                        <span className='text-sm'>Não tem uma conta? <span className='text-blue-400 font-semibold cursor-pointer'>Cadastre-se</span></span>
                    </Link>
                </div>
                <div className='text-center mt-4'>
                    <span className='text-sm'>Obtenha o aplicativo</span>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <img className='w-36 h-10 cursor-pointer' src={logoGooglePlay} alt="" />
                    <img className='w-28 h-10 ml-2 cursor-pointer' src={logoMicrosoft} alt="" />
                </div>
            </div>
            </>
            }
        </div>
    )
} 