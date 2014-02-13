var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed


var foobar = {
  titleApp: function() {
  		
  //	alert($("#original").val());
    return "Comma Separated Value Analyzer";
  },
    placeHolder: function() {

    if(localStorage){
        return "true";
    }else{
        return "false";
    }

  }
  
};

describe('Texto', function() {
	before(function() {
   $("#original").val("25C");
  });
  
  describe('#AppValues()', function() {
    it('title value-> should work with assert', function() {
      assert.equal(foobar.titleApp(), 'Comma Separated Value Analyzer');
    })

    it('localstorage true-> should work with expect', function() {
      expect(foobar.placeHolder()).to.equal('true');
    })

  });
  });
 
