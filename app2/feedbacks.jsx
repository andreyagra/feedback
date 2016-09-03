import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

@connect((state) => ({
  feedbacks: state.feedbacks,
}))
export default class Feedbacks extends React.Component{

	componentDidMount() {

    this.props.dispatch({
      type: "Sucesso",
    });
	}

	root = (
	  <div style={styles.root}>
			<div>
	      <List>
	        <Subheader>OKR</Subheader>
					<ListItem
						primaryText="Key"
						secondaryText="2"
					/>
					<ListItem
	          primaryText="Avaliado"
	          secondaryText="Xpectromen"
	        />
	        <ListItem
	          primaryText="Descrição"
	          secondaryText={
							<TextField
								hintText="Descricao"
								multiLine={true}
								rows={2}
								rowsMax={4}
								/>
						}
	        />
	      </List>
	      <Divider />
	      <List>
	        <Subheader>Feedbacks Selecionados</Subheader>
				</List>
			</div>
				<List>
					<Subheader>Feedbacks Coletados</Subheader>
						{/* <ListItem =
							<Card>
							</Card>
						}/> */}
	        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
	        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
	        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
				</List>
		</div>
	)

	render() {
		const list = this.props.feedbacks.map(elemento => <div>{elemento.email}</div>);
		return (
			<div>
				{list}
			</div>

		);
	}
}
