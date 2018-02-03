import React, { Component } from "react";

class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
	}

	onSubmit(event) {
		event.preventDefault();
		// const {email, password} = this.state;
		// this.props.onSubmit({email, password});
		this.props.onSubmit(this.state);
		this.state.email = "";
		this.state.password = "";
	}

	render() {
		return (
			<div className="row">
				<form className="col s6" onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input
							placeholder="Email"
							value={this.state.email}
							onChange={event => this.setState({ email: event.target.value })}
						/>
					</div>
					<div className="input-field">
						<input
							placeholder="password"
							type="password"
							value={this.state.password}
							onChange={event =>
								this.setState({ password: event.target.value })
							}
						/>
					</div>
					<div className="errors">
						{this.props.errors.map(error => <div key={error}>{error}</div>)}
					</div>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;
