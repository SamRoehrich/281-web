import { createContext, useReducer, useContext } from "react";

const AdminContext = createContext();

const AdminStateProvider = AdminContext.Provider;

const initialState = {
  event: {}
};

function reducer(state, action) {
    switch(action.type) {
        case "set-event":
            let event = fetch("http://localhost:5000/event", {
                method: "GET",
                body: { eventId: action.payload}
            })
            if (event !== null) return { event } 
            else return { event:  {}}
        case "refresh":
            event = fetch("http://localhost:5000/event", {
                method: "GET",
                body: { eventId: state.event.eventId}
            })
            if (event !== null) return { event } 
            else return { event:  {}}
        default:
            return state 
    }
}

function AdminState({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const defaultValues = { state, dispatch}
    return <AdminStateProvider value={defaultValues}>
        {children}
    </AdminStateProvider>
}

function useAdminState() {
    const all = useContext(AdminContext)
    return all
}

export { AdminState, AdminContext, useAdminState}