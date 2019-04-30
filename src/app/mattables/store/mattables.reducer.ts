export function reducer(state, action) {
  switch (action.type) {
          case 'MAT_TABLES':
          console.log(JSON.stringify(state));
          console.log(action.payload);
          return {
              ...state,
              ShowMatTable: action.payload
          };
          default:
          return state;
        }
  }

// export function MattablesReducers(state = initialValue, action: MattableListActions.MattableListActions) {
// switch (action.type) {
//         case MattableListActions.MAT_TABLES:
//         return {
//             ...state,
//             Element: [...state.Element]
//         };
//         default:
//         return state;
//       }
// }
