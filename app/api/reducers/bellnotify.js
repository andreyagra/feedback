import { FEEDBACK_INVITES_INVITE_COMPLETED } from 'api/actions';

export default function (state = {valueBellNotify:false}, action) {
  if (action.type === FEEDBACK_INVITES_INVITE_COMPLETED) {
    return action.payload;
  }
  return state;
}
