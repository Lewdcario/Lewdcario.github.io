module.exports = {
	projects: [
		{
			root: './src',
			vetur: {
				useWorkspaceDependencies: true,
				experimental: {
					templateInterpolationService: true
				}
			}
		}
	]
};
