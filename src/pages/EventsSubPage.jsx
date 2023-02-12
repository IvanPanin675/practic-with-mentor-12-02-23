import { useFetchEvents } from 'hooks/useFetchEvents';

export const EventsSubPage = () => {
  const event = useFetchEvents();

    return <>{event && <div><p>{event.name}</p>
    <img src={event.images[0].url} alt="" /></div>}</>;
};
