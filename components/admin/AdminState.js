import { createContext, useReducer, useContext } from "react";

const AdminContext = createContext();

const AdminStateProvider = AdminContext.Provider;

const API_ROUTE = "http://localhost:5000/event/all";

const initialState = {
  events: [],
  currentEvent: {
    eventID: "",
    scorekeeperCode: "",
    adminCode: "",
    eventName: "",
    eventDate: "",
    eventLocation: "",
  },
  user: "sam_roehrich@icloud.com",
};

function reducer(state, action) {
  switch (action.type) {
    case "load-all-events":
      return {
        ...state,
        events: action.payload,
        currentEvent: action.payload[0],
      };
    case "set-current-event":
      return { ...state, currentEvent: action.payload };
    default:
      return state;
  }
}

function AdminState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const defaultValues = { state, dispatch };
  return (
    <AdminStateProvider value={defaultValues}>{children}</AdminStateProvider>
  );
}

function useAdminState() {
  const all = useContext(AdminContext);
  return all;
}

export { AdminState, AdminContext, useAdminState };
