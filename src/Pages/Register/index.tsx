import logoInstagram from '../../../src/assets/Instagram_logo.svg.png';
import logoFacebook from '../../../src/assets/facebook-login.png';
import logoGooglePlay from '../../../src/assets/googleplay-icon.png';
import logoMicrosoft from '../../../src/assets/microsoft-icon.png';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()

    const createNumberRandom  = Math.random() * 5;
    const numberRandom = createNumberRandom.toString();

    const tokenGet = localStorage.getItem('token');
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithFacebook] = useSignInWithFacebook(auth);

    async function LoginFacebook(event: React.MouseEvent) {
        event.preventDefault()

        if(await signInWithFacebook()) {
            navigate('/home')
            localStorage.setItem('key', numberRandom)
            window.location.reload()
        }
    }

    async function handleCreateSignIn(event: React.FormEvent) {
        event.preventDefault()

        if(email.length > 6) {
            if(await createUserWithEmailAndPassword(email, password)) {
                navigate('/')
                alert('Logado com sucesso')
                window.location.reload()
            } else {    
                return alert('A senha precisa ter no minimo 6 caracters.')
            }
        }
    }
    
    if(loading) {
        return <p>Carregando...</p>
    }
    
    return (
        <div className="flex justify-center items-center h-screen">
            {tokenGet ? <p>Rota Privada</p> : 
            <>
            <div className="h-3/5 w-width-image bg-phone-instagram"></div>
            <div className='flex flex-col'>     
                <form onSubmit={handleCreateSignIn}>
                    <div className="flex flex-col justify-center items-center h-height-login-register w-width-login bg-login-instagram border border-slate-300">
                        <img src={logoInstagram} className="p-10 w-64" alt="instagramlogo" />
                        <span className='text-center mt-[-30px] mb-[10px] text-lg font-semibold leading-5 text-[#8E8E8E]'>Cadastre-se para ver fotos e<br/> vídeos dos seus amigos.</span>
                        <div className='flex items-center justify-center cursor-pointer h-8 w-[270px] bg-blue-500 mt-3 rounded-[5px] mb-7 '>
                            <img src={logoFacebook} alt="logofacebook" className='h-4 w-4 mr-2' />
                            <span className='flex justify-center items-center text-sm text-white font-semibold h-16' onClick={LoginFacebook}>Entrar com o facebook</span>
                        </div>
                        <div className='flex justify-center items-center mt-[-10px] mb-[20px]'>
                            <div className='border border-slate-300 w-28 mr-3'></div>
                            <span className='text-slate-400 text-xs'>OU</span>
                            <div className='border border-slate-300 w-28 ml-3'></div>
                        </div>
                        <div className='flex items-center flex-col justify-center'>
                            <input className='border border-slate-300 w-[270px] h-10 outline-none bg-slate-50 p-2 text-xs' required={true} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
                            <input className='border border-slate-300 w-[270px] h-10 outline-none bg-slate-50 p-2 mt-2 text-xs' required={true} type="text" placeholder="Nome completo" />
                            <input className='border border-slate-300 w-[270px] h-10 outline-none bg-slate-50 p-2 mt-2 text-xs'required={true} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
                            <input className='border border-slate-300 w-[270px] h-10 outline-none bg-slate-50 p-2 mt-2 text-xs'required={true} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirmar Senha" />
                            <div className='text-xs leading-4 m-[10px 40px] text-center text-[#8E8E8E] mt-4 ml-10 mr-10'>
                                As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram. <strong>Saiba mais</strong>
                                <br/>
                                <br/>
                                Ao se cadastrar, você concorda com nossos <strong>Termos, Política de Privacidade e Política de Cookies.</strong>
                            </div>
                            <div className='flex justify-center items-center cursor-pointer'>
                                <button className='h-8 w-[270px] bg-blue-500 mt-5 mb-10 rounded-[5px] text-white font-semibold text-[15px] cursor-pointer disabled:opacity-50' disabled={password === confirmPassword ? false : true} type='submit'>Cadastre-se</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='flex items-center justify-center mt-3 w-full h-16 bg-login-instagram border border-slate-300'>
                    <Link to="/">
                        <span className='text-sm'>Tem uma conta? <span className='text-blue-400 font-semibold cursor-pointer'>Conecte-se</span></span>
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