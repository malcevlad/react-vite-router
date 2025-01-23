export interface registerApiData {
	message: string;
}

export const registerApi = (): Promise<registerApiData> => {
	return Promise.resolve({
		message: 'Register OK!',
	});
};