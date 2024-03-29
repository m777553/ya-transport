import { Schedule } from './schedule.model';

export const scheduleMock: Schedule = {
  'pagination':
    {
      'total': 11,
      'limit': 100,
      'offset': 0,
    },
  'interval_segments':
    [
      {
        'from':
          {
            'code': 's9600396',
            'title': 'Симферополь',
            'popular_title': '',
            'short_title': '',
            'transport_type': 'plane',
            'type': 'station',
            'station_type': 'bus_stop',
            'station_type_name': 'автобусная остановка',
          },
        'thread':
          {
            'uid': 'SU-1827A_c26_agent',
            'title': 'Симферополь - Москва',
            'number': 'SU 1827',
            'short_title': 'Симферополь - Москва',
            'thread_method_link': 'api.rasp.yandex.net/v3.0/thread/?date=2017-01-02&uid=U6-8_1_c30_5',
            'carrier':
              {
                'code': 196,
                'contacts': 'Служба поддержки: </br> для звонков из России: 8-800 2000 000',
                'url': 'http://example.com/',
                'logo_svg': null,
                'title': 'Example Inc.',
                'phone': '',
                'codes':
                  {
                    'icao': null,
                    'sirena': 'У6',
                    'iata': 'U6',
                  },
                'address': 'Москва, ул. Тверская, 6',
                'logo': '//yastatic.net/rasp/media/data/company/logo/example.jpg',
                'email': 'info@example.com',
              },
            'transport_type': 'plane',
            'vehicle': 'Airbus А321',
            'transport_subtype':
              {
                'color': '#FF7F44',
                'code': 'suburban',
                'title': 'Пригородный поезд',
              },
            'express_type': null,
          },
        'departure_platform': '',
        'stops': '',
        'departure_terminal': null,
        'to':
          {
            'code': 's9600213',
            'title': 'Шереметьево',
            'popular_title': '',
            'short_title': '',
            'transport_type': 'plane',
            'type': 'station',
            'station_type': 'bus_stop',
            'station_type_name': 'автобусная остановка',
          },
        'has_transfers': false,
        'tickets_info':
          {
            'et_marker': false,
            'places':
              [
                {
                  'currency': 'RUB',
                  'price':
                    {
                      'cents': 0,
                      'whole': 4863,
                    },
                  'name': 'эконом',
                },
              ],
          },
        'duration': 8100,
        'arrival_terminal': 'D',
        'start_date': '2017-01-02',
        'arrival_platform': '',
      },

    ],
  'segments':
    [
      {
        'arrival': '2017-03-28 10:15:00',
        'from':
          {
            'code': 's9600396',
            'title': 'Симферополь',
            'popular_title': '',
            'short_title': '',
            'transport_type': 'plane',
            'station_type': 'bus_stop',
            'station_type_name': 'автобусная остановка',
            'type': 'station',
          },
        'thread':
          {
            'uid': 'SU-1827A_c26_agent',
            'title': 'Симферополь - Москва',
            'number': 'SU 1827',
            'short_title': 'Симферополь - Москва',
            'thread_method_link': 'api.rasp.yandex.net/v3.0/thread/?date=2017-01-02&uid=U6-8_1_c30_5',
            'carrier':
              {
                'code': 196,
                'contacts': 'Служба поддержки: </br> для звонков из России: 8-800 2000 000',
                'url': 'http://example.com/',
                'logo_svg': null,
                'title': 'Example Inc.',
                'phone': '',
                'codes':
                  {
                    'icao': null,
                    'sirena': 'У6',
                    'iata': 'U6',
                  },
                'address': 'Москва, ул. Тверская, 6',
                'logo': '//yastatic.net/rasp/media/data/company/logo/example.jpg',
                'email': 'info@example.com',
              },
            'transport_type': 'plane',
            'vehicle': 'Airbus А321',
            'transport_subtype':
              {
                'color': '#FF7F44',
                'code': 'suburban',
                'title': 'Пригородный поезд',
              },
            'express_type': null,
          },
        'departure_platform': '',
        'departure': '2017-03-28T06:00:00+03:00',
        'stops': '',
        'departure_terminal': null,
        'to':
          {
            'code': 's9600213',
            'title': 'Шереметьево',
            'popular_title': '',
            'short_title': '',
            'transport_type': 'plane',
            'station_type': 'bus_stop',
            'station_type_name': 'автобусная остановка',
            'type': 'station',
          },
        'has_transfers': false,
        'tickets_info':
          {
            'et_marker': false,
            'places':
              [
                {
                  'currency': 'RUB',
                  'price':
                    {
                      'cents': 0,
                      'whole': 4863,
                    },
                  'name': 'эконом',
                },
              ],
          },
        'duration': 8100,
        'arrival_terminal': 'D',
        'start_date': '2017-01-02',
        'arrival_platform': '',
      },
    ],
  'search':
    {
      'date': '2017-01-02',
      'to':
        {
          'code': 'c213',
          'type': 'settlement',
          'popular_title': 'Москва',
          'short_title': 'Москва',
          'title': 'Москва',
          'transport_type': 'bus',
          'station_type': 'bus_stop',
          'station_type_name': 'автобусная остановка',
        },
      'from':
        {
          'code': 'c146',
          'type': 'settlement',
          'popular_title': 'Симферополь',
          'short_title': 'Симферополь',
          'title': 'Симферополь',
          'transport_type': 'bus',
          'station_type': 'bus_stop',
          'station_type_name': 'автобусная остановка',
        },
    },
};
