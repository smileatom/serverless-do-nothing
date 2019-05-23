/* eslint-disable prefer-arrow-callback,func-names,quote-props,
  class-methods-use-this,no-unused-expressions,global-require, no-param-reassign, no-multi-assign, no-throw-literal */
const chai = require('chai');
const DoNothing = require('../src/index');

const assert = chai.assert;
const expect = chai.expect;

describe('DoNothing', function () {
  describe('#constructor', function () {
    context('When creating an instance of DoNothingPlugin.', function () {
      it('The plugin is initialized.', function () {
        const plugin = new DoNothing(null);

        assert.isNull(plugin.serverless);
        assert.isNotNull(plugin.options);
        assert.isNotNull(plugin.commands);
        assert.equal(plugin.pluginName, 'serverless-do-nothing');
        assert.instanceOf(plugin.hooks, Object);
        assert.isNotNull(plugin.hooks['package:initialize']);
      });
    });
  });

  describe('#hook', function () {
    context('When calling doNothing', function () {
      it('doNothing is invoked.', function () {
        const plugin = new DoNothing(null);
        const doNothing = function () {
          plugin.hooks['package:initialize']();
        };

        expect(doNothing).to.not.throw();
      });
    });
  });
});
