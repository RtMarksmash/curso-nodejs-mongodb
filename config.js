const config = {
    port: process.env.PORT || 3000,
    host: process.env.LOCAL_HOST || 'http://localhost:',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    fileRoute: process.env.FILES || '/files'


}


module.exports = config;