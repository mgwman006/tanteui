import { AccountAction, AccountDetailsDto, AccountState } from "../../types/types";


export const accountReducer = (state: AccountState, action: AccountAction): AccountState => {
  switch (action.type) 
  {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { accountDetails: action.payload, loading: false, error: null };

    case "FETCH_ERROR":
      return { accountDetails: null, loading: false, error: action.payload };

    case "LOGOUT":
      return { accountDetails: null, loading: false, error: null };

     case "APPEND_USER":
      return { 
        ...state, 
        accountDetails: { 
          ...state.accountDetails, 
          userDetails: action.payload 
        }  as AccountDetailsDto
      };
    
    default:
      return state;
  }
};