import { useParams } from "react-router-dom";

export default function EventDetail() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
      <a href={params.eventId}>Link ID: {params.eventId}</a>
    </>
  );
}
