import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FeedbacksTheme from 'theme';
import Hammer from 'react-hammerjs';

export default class Base extends React.Component{
  static propTypes = {
    children: React.PropTypes.element,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  onSwipeRight = event => {
    if (this.props.location.pathname === '/invites') {
      this.context.router.push('/feedbacks');
    } else if (this.props.location.pathname === '/feedbacks') {
      this.context.router.push('/search');
    }
  }

  onSwipeLeft = event => {
    if (this.props.location.pathname === '/feedbacks') {
      this.context.router.push('/invites');
    } else if (this.props.location.pathname === '/search') {
      this.context.router.push('/feedbacks');
    }
  }

	render() {
		const {children} = this.props;
		
		const style = {
			width: '50%',
			height: '400px',
		};

		return (
			<MuiThemeProvider muiTheme={getMuiTheme(FeedbacksTheme)}>
	        	<Hammer onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight}>
	        	<div>
	        		<main style={style}>
						{children}
	        		</main>
	        	</div>	
				</Hammer>	
			</MuiThemeProvider> 
			)
	}
}