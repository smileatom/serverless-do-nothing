

const BbPromise = require('bluebird');

/** @module */

/**
 * The DoNothingPlugin does nothing
 */
class DoNothingPlugin {
  /**
   * Creates an instance of DoNothingPlugin
   *
   * @param {Object} serverless the serverless config
   * @param {Object} options the options
   */
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options || {};
    this.commands = {};
    this.pluginName = 'serverless-do-nothing';

    this.hooks = {
      'package:initialize': () => BbPromise.bind(this).then(this.doNothing()),
    };
  }

  /**
   *  Does nothing.
   */
  doNothing() {

  }
}

module.exports = DoNothingPlugin;
