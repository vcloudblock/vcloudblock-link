const VCloudBlockLink = require('../src/index');

const link = new VCloudBlockLink();
link.listen();

link.on('ready', () => {
    console.info('Server is ready.');
});

link.on('address-in-use', () => {
    console.info('Address in use.');
});
