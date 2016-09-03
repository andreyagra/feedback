

export default function (state = [], action) {
  console.log("Reducer", state, action);
  if (action.type === "Sucesso") {
    return ([
      {
        email: 'cmilfont@gmail.com'
      }]);
  }
  return state;
}
