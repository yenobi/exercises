const winston = require('winston');
const ENV = process.env.NODE_ENV;

function getLogger(module) {
    const path = module.filename.split('/').slice(-2).join('/');

    return new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({
                colorize: true,
                label: path
            })
        ]
    });
}

module.exports = getLogger;

                // level: ENV === 'dev' ? 'debug' : 'error',
