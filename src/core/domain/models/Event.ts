export interface Event {
  name: string;
  eventDate: EventDate;
  time: string;
  location: string;
  address: string;
  mapsLink: string;
}

interface EventDate {
  day: String;
  date: String;
}
