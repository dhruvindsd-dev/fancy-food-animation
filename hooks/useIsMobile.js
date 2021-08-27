export const useIsMobile = () => {
	if (typeof window !== "undefined") return window.innerWidth < 768;
};

export const useIsTablet = () => {
	if (typeof window !== "undefined") return window.innerWidth < 1024;
};
