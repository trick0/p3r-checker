import axios from "axios";
import cheerio from "cheerio";

export const providers = {
	'mediaworld': {
		action: (callback) => {
			const url = 'https://www.mediaworld.it/';
			return axios.get(url).then(res => {
				callback(false)
			});
		}
	},
	'unieuro': {
		action: (callback) => {
			const url = 'https://www.unieuro.it/online/Playstation-5/PlayStation-5-pidSONPS5DISC';
			axios.get(url).then(res => {
				const $ = cheerio.load(res.data);
				const isAvailable = $('.available.on').length > 0;
				callback(isAvailable);
				setTimeout(() => {
					providers.unieuro.action(callback);
				}, 3000);
			});
		}
	},
	'euronics': {
		action: (callback) => {
			const url = 'https://www.euronics.it';
			return axios.get(url).then(res => {
				callback(false)
			});
		}
	},
	'amazon': {
		action: (callback) => {
			const url = 'https://www.amazon.it/Playstation-Sony-PlayStation-5/dp/B08KKJ37F7';
			return axios.get(url).then(res => {
				const $ = cheerio.load(res.data);
				const isAvailable = !$("#availability .a-size-medium.a-color-price")[0].children[0].data.trim().includes("on disponibile");
				callback(isAvailable);
				setTimeout(() => {
					providers.amazon.action(callback);
				}, 3000);
			});
		}
	},
	'p3': {
		action: (callback) => {
			const url = 'https://persona.atlus.com/p3r/index.html?lang=it';
			return axios.get(url).then(res => {
				const $ = cheerio.load(res.data);
				const isAvailable = $(".retailSelectInput select").find('option').length > 1;
				callback(isAvailable);
				setTimeout(() => {
					providers.p3.action(callback);
				}, 3000);
			});
		}
	},
}

export default {
	providers
}
