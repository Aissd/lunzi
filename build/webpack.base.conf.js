const manifest = require('../vendor-manifest.json');

plugins: [
    new webpack.DllReferencePlugin({
        manifest
    })
]