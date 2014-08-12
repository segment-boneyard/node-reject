
var assert = require('assert');
var reject = require('./');

describe('reject', function(){
  var obj;
  var arr;

  beforeEach(function(){
    arr = [1, null, {}];
  });

  beforeEach(function(){
    obj = {
      one: undefined,
      two: null,
      arr: [],
      num: 1,
      obj: {}
    };
  });

  describe('(obj)', function(){
    it('should reject nulls', function(){
      assert.deepEqual(reject(obj), {
        arr: [],
        num: 1,
        obj: {}
      });
    });
  });

  describe('(arr)', function(){
    it('should reject nulls', function(){
      assert.deepEqual(reject(arr), [1, {}]);
    });
  });

  describe('(obj, nan)', function(){
    it('should reject nan', function(){
      assert.deepEqual(reject(obj, nan), {
        num: 1
      });
    });
  });

  describe('(arr, nan)', function(){
    it('should reject nan', function(){
      assert.deepEqual(reject(arr, nan), [1]);
    });
  });

  describe('.array(arr, nan)', function(){
    it('should reject nan', function(){
      assert.deepEqual(reject.array(arr, nan), [1]);
    });
  });

  describe('.object(arr, nan)', function(){
    it('should reject nan', function(){
      assert.deepEqual(reject.object(obj, nan), {
        num: 1
      });
    });
  });

  describe('.types(arr, "object")', function(){
    it('should reject objects', function(){
      assert.deepEqual(reject.types(arr, 'object'), [1, null]);
    });
  });

  describe('.types(arr, ["object", "null"])', function(){
    it('should reject nulls and objects', function(){
      assert.deepEqual(reject.types(arr, ['object', 'null']), [1]);
    });
  });

  describe('.types(obj, "object")', function(){
    it('should reject objects', function(){
      assert.deepEqual(reject.types(obj, 'object'), {
        one: undefined,
        two: null,
        arr: [],
        num: 1
      });
    });
  });

  describe('.types(obj, ["object", "null"])', function(){
    it('should reject nulls and objects', function(){
      assert.deepEqual(reject.types(obj, ['object', 'null']), {
        one: undefined,
        arr: [],
        num: 1
      });
    });
  });
});

function nan(v){
  return 'number' != typeof v;
}
