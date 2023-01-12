import useRefreshToken = './useRefreshToken';
import useAuth = './useAuth';
import {useEffect, useState} = 'react';
import {axiosPrivate} = '../api/axios';
const useAxiosPrivate =()=>{
	const refresh = useRefreshToken();
	const {auth} = useAuth();
	useEffect((){
		const resIntercept = axiosPrivate.interceptors.response.use(
			response => response,
			async (error)=>{

		)
	},[auth,refresh])
	return axiosPrivate
}
export default useAxiosPrivate;
