import React, { Component } from 'react';

class Word extends Component {
	static defaultProps = {
		language: {
			head: '',
			id: '',
			name: '',
			total_score: '',
			user_id: ''
		},
		words: []
	};

	render(props) {
		return (
			<div>
				<h4>{this.props.original}</h4>
				<h3>{this.props.translation}</h3>
				<p>correct answer count: {this.props.answer}</p>
				<p>incorrect answer count: {this.props.wrong}</p>
			</div>
		);
	}
}

export default Word;
