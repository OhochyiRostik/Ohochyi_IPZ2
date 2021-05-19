'use strict';

let hljs   = require('../../build');
let should = require('should');

describe('.highlight()', function() {
  it('should works without continuation', function() {
    const code   = "html()";
    const result = hljs.highlight('dps', code, false, false);

    result.value.should.equal(
      '<span class="hljs-keyword">html</span><span class="hljs-symbol">(</span><span class="hljs-symbol">)</span>'
    );
  });
});
