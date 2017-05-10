console.log('Test');

Meteor.method("return-five", function () {
  return 5;
}, {httpMethod: 'get'});

Meteor.method("add", function (a, b) {
  return a + b;
}, {
	getArgsFromRequest: function (request) {
    // Let's say we want this function to accept a form-encoded request with
    // fields named `a` and `b`.
    var content = request.body;

    // Since form enconding doesn't distinguish numbers and strings, we need
    // to parse it manually
    return [ parseInt(content.a, 10), parseInt(content.b, 10) ];
  }
});

Meteor.methods({

	test: function () {
		return {msg: 'test'};
	},




});