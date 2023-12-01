const handleDownload = () => {
	const filePath = "/en_CV_OSTROWER-Leonel.pdf";
	const url = filePath;

	if (typeof window !== "undefined") {
		window.open(url, "_blank");
	}
};

export default handleDownload;
