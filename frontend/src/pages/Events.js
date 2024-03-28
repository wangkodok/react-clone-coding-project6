import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function Events() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}
