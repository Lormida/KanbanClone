import axios from 'axios';
import { API_URL } from '~/shared/lib/constants/global';

export const apiInstance = axios.create({
	baseURL: API_URL,
});
