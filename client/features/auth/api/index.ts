/* import { UserData } from '../types';
import { AxiosResponse } from 'axios';
import Axios from '../../../../app/axios';

export type SignUpRequestData = {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone_number?: string;
	avatar?: string;
	username: string;
	picture?: File;
	team?: string;
	profile?: {
		team: string;
	};
};

export type SignUpResponse = {
	auth_token: string;
	email: string;
	first_name: string;
	id: string;
	last_name: string;
};

export const signUp = (
	data: SignUpRequestData
): Promise<AxiosResponse<SignUpResponse>> =>
	Axios.post('/auth/register/', data);

export type SignInData = {
	username: string;
	password: string;
};

export type SignInResponse = {
	refresh: string;
	access: string;
};

export const signIn = (
	data: SignInData
): Promise<AxiosResponse<SignInResponse>> => Axios.post('/auth/token/', data);

export type TolstoyToken = {
	token: string;
};

export const getTolstoyToken = (): Promise<AxiosResponse<TolstoyToken>> =>
	Axios.post(`/tolstoy/token/`);

export type RefreshTokenResponse = {
	refresh: string;
	access: string;
};

export const refreshToken = (
	refresh: string
): Promise<AxiosResponse<RefreshTokenResponse>> =>
	Axios.post(`/auth/token/refresh/`, {
		refresh: refresh,
	});

export const verifyEmail = (token: string) =>
	Axios.post(`/auth/email-verification/`, {
		token: token,
	});

export type RequestPasswordData = {
	email: string;
};

export const resetPasswordRequest = (data: RequestPasswordData) =>
	Axios.post(`/auth/reset-password/request/`, data);

export type ResetPasswordData = {
	token: string;
	password: string;
};

export const resetPassword = (data: ResetPasswordData) =>
	Axios.post(`/auth/reset-password/confirm/`, data);

export type UpdateProfileData = {
	first_name?: string;
	last_name?: string;
	email: string;
	city: string;
	about: string;
	avatar?: string;
};

export const updateProfile = (data: UpdateProfileData | FormData) =>
	Axios.patch(`/auth/profile/`, data);

export const getProfileData = (): Promise<AxiosResponse<UserData>> =>
	Axios.get(`/auth/profile/`);

export const verifyToken = (token: string) =>
	Axios.post('/auth/token/verify/', {
		token: token,
	});
 */
