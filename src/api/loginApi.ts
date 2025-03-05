export interface loginApiData {
	message: string;
}

export const loginApi = (): Promise<loginApiData> => {
	return Promise.resolve({
		message: 'Login OK!',
	});
};
