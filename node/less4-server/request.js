const url = require('url');
const log = require('winston');

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    log.info('got request');

    if (parsedUrl.pathname === '/echo' && parsedUrl.query.message ) {
        log.Logger.debug(`Echo: ${parsedUrl.query.message}`);
        res.end(parsedUrl.query.message);
    }

    log.Logger.error('Unknown URL');

    res.statusCode = 404;
    res.end('Page not found');
};
