const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    log: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'cyan',
    error: 'red'
});
var log = require('fancy-log');

/**
 * 
 * 
 * @class Logger
 */
class Logger {
    constructor() {

    }

    /**
     * 
     * 
     * @param {any} source 
     * @param {any} msg 
     * @memberof Logger
     */
    log(source, msg) {
        // @ts-ignore
        let message = colors.log(msg)
        log(`${source} | ${message}`);
    }

    /**
     * 
     * 
     * @param {any} source 
     * @param {any} msg 
     * @memberof Logger
     */
    info(source, msg) {
        // @ts-ignore
        let message = colors.info(msg)
        log(`${source} | ${message}`);
    }

    /**
     * 
     * 
     * @param {any} source 
     * @param {any} msg 
     * @memberof Logger
     */
    warn(source, msg) {
        // @ts-ignore
        let message = colors.warn(msg)
        log(`${source} | ${message}`);
    }

    /**
     * 
     * 
     * @param {any} source 
     * @param {any} msg 
     * @memberof Logger
     */
    error(source, msg) {
        // @ts-ignore
        let message = colors.error(msg)
        log(`${source} | ${message}`);
    }

    /**
     * 
     * 
     * @param {any} source 
     * @param {any} msg 
     * @memberof Logger
     */
    data(source, msg) {
        // @ts-ignore
        let message = colors.data(msg)
        log(`${source} | ${message}`);
    }

    /**
     * 
     * 
     * @param {any} source 
     * @param {any} msg 
     * @memberof Logger
     */
    debug(source, msg) {
        // @ts-ignore
        let message = colors.debug(msg)
        log(`${source} | ${message}`);
    }
}

module.exports = new Logger();
