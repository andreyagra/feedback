import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Invite extends React.Component {

  state = { invite: {} }

  constructor(props) {
    super(props);

    if(this.props.invite) {
      this.state.invite = this.props.invite;
    }
  }

  componentDidMount() {
    if(!this.props.invite) {
      fetch(`/invites/${this.props.params.id}.json`).then(
        res => res.json().then(this.refresh)
      );
    }
  }

  refresh = item => {
    this.setState({invite: item});
  }

  getAvatar = () => {
    const invite = this.state.invite;
    return (invite && invite.url) ?
      <Avatar src={invite.url} /> :
      <Avatar icon={<FontIcon className="material-icons">person</FontIcon>} />;
  }

  render() {

    const invite = this.state.invite;
    const name = (invite)? invite.name: '';
    const avatar = this.getAvatar();
    const inviteText = `${name} o convida para dar um Feedback sobre o que voce admiria que ele pretende conservar e melhorar o que pode te incomodar`;

    return(
        <div className="invite">
          {avatar}
          <div className="invite-text">
          {inviteText}
          </div>

          <div className="mdl-grid invite-grid">

          <div className="mdl-cell mdl-cell--6-col">

          <div className="invite-negative">
            <i className="fa fa-meh-o" aria-hidden="true"></i>
          </div>

          <form action="#">
          <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            name="negative1"
          />
          <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            name="negative2"
          />
          <TextField
            multiLine={true}
            rows={2}
            rowsMax={4}
            name="negative3"
          />

          </form>

          </div>

            <div className="mdl-cell mdl-cell--6-col">

            <div className="invite-positive">
              <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>

            <form action="#">
            <TextField
              multiLine={true}
              rows={2}
              rowsMax={4}
              name="positive1"
            />
            <TextField
              multiLine={true}
              rows={2}
              rowsMax={4}
              name="positive2"
            />
            <TextField
              multiLine={true}
              rows={2}
              rowsMax={4}
              name="positive3"
            />
            </form>

            </div>

          </div>

        </div>
    )
  }

}
