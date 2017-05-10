import './signup.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

Template.signup.events({
  'submit form' (event, template) {
		event.preventDefault();

		let email = template.find("[name='email']").value;
		let password = template.find("[name='password']").value;

		Accounts.createUser({email: email, password: password}, (err) => {
			if (err) {
				console.log(err.reason);
			}
		});
	}
});
