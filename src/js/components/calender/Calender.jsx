import React from 'react';
import MediaQuery from 'react-responsive';
import Content from './Content';

class Calender extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const Desktop = props => <MediaQuery {...props} minWidth={992} />;
		const Tablet = props => (
			<MediaQuery {...props} minWidth={768} maxWidth={991} />
		);
		const Mobile = props => (
			<MediaQuery {...props} maxWidth={767} minWidth={651} />
		);
		const SmallMobile = props => <MediaQuery {...props} maxWidth={650} />;
		const Default = props => <MediaQuery {...props} minWidth={768} />;

		return (
			<div>
				<Desktop>
					<Content count={4} />
				</Desktop>
				<Tablet>
					<Content count={3} />
				</Tablet>
				<Mobile>
					<Content count={2} />
				</Mobile>
				<SmallMobile>
					<Content count={1} />
				</SmallMobile>
			</div>
		);
	}
}

export default Calender;
