const API_ROUTE = "http://localhost:5000/event/all";

const loadEvents = async (user) => {
  const response = await fetch(API_ROUTE, {
    method: "POST",
    body: { user },
  });
  const data = await response.json();
  return data;
};

export default loadEvents;
