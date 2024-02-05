export interface Schedule {
  pagination: Pagination;
  interval_segments: IntervalSegment[];
  segments: Segment[];
  search: Search;
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
}

interface IntervalSegment {
  from: Station;
  thread: Thread;
  departure_platform: string;
  stops: string;
  departure_terminal: string | null;
  to: Station;
  has_transfers: boolean;
  tickets_info: TicketsInfo;
  duration: number;
  arrival_terminal: string;
  start_date: string;
  arrival_platform: string;
}

interface Segment {
  arrival: string;
  from: Station;
  thread: Thread;
  departure_platform: string;
  departure: string;
  stops: string;
  departure_terminal: string | null;
  to: Station;
  has_transfers: boolean;
  tickets_info: TicketsInfo;
  duration: number;
  arrival_terminal: string;
  start_date: string;
  arrival_platform: string;
}

interface Station {
  code: string;
  title: string;
  popular_title: string;
  short_title: string;
  transport_type: string;
  type: string;
  station_type: string;
  station_type_name: string;
}

interface Thread {
  uid: string;
  title: string;
  number: string;
  short_title: string;
  thread_method_link: string;
  carrier: Carrier;
  transport_type: string;
  vehicle: string;
  transport_subtype: TransportSubtype;
  express_type: string | null;
}

interface Carrier {
  code: number;
  contacts: string;
  url: string;
  logo_svg: string | null;
  title: string;
  phone: string;
  codes: Codes;
  address: string;
  logo: string;
  email: string;
}

interface Codes {
  icao: string | null;
  sirena: string;
  iata: string;
}

interface TransportSubtype {
  color: string;
  code: string;
  title: string;
}

interface TicketsInfo {
  et_marker: boolean;
  places: Place[];
}

interface Place {
  currency: string;
  price: Price;
  name: string;
}

interface Price {
  cents: number;
  whole: number;
}

interface Search {
  date: string;
  to: Station;
  from: Station;
}
