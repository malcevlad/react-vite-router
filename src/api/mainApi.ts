export interface MainApiData {
	message: string;
}

export const mainApi = (): Promise<MainApiData> => {
	return Promise.resolve({
		message: 'Main OK!',
	});
};