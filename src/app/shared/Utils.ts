import {HttpClient} from "@angular/common/http";

import 'rxjs/Rx';

import { Country } from '../models/country.model';
import { State } from '../models/state.model';

export class Utils {
  static SERVER_URL = 'http://localhost:3000';
  static SERVER_USER_URL = Utils.SERVER_URL + '/users';
  static SERVER_USER_SIGNIN_URL = Utils.SERVER_USER_URL + '/signin';
  static SERVER_PROFILE_URL = Utils.SERVER_USER_URL + '/profile'
  static SERVER_CHECK_EMAIL_URL = Utils.SERVER_USER_URL + '/checkemail';
  static SERVER_AIRPORT_URL = Utils.SERVER_URL + '/airports';
  static SERVER_AIRPORT_SEARCH_URL = Utils.SERVER_AIRPORT_URL + '/search';
  static SERVER_ITINERARY_URL = Utils.SERVER_URL + '/itineraries';
  static SERVER_ITINERARY_SEARCH_URL = Utils.SERVER_ITINERARY_URL + '/search';
  static SERVER_ITINERARY_FEATURE_URL = Utils.SERVER_ITINERARY_URL + '/features';
  static SERVER_BOOKING_CONFIRM_URL = Utils.SERVER_URL + '/bookings';
  static SERVER_BOOKING_HISTORY_URL = Utils.SERVER_URL + '/booking-histories'

  static DAYS = Array(31).fill(0).map((x, i) => i + 1);
  static MONTHS = Array(12).fill(0).map((x, i) => i + 1);
  static get YEARS() {
    const startYear = 1920;
    const endYear = 2000;
    const years = [];
    for (let i = endYear; i >= startYear; --i) {
      years.push(i);
    }

    return years;
  }
  static COUNTRIES = [
      new Country('AD', 'Andorra', '376'),
      new Country('AG', 'Antigua and Barbuda', '1'),
      new Country('AR', 'Argentina', '54'),
      new Country('AU', 'Australia', '61'),
      new Country('AT', 'Austria', '43'),
      new Country('BS', 'Bahamas, The', '1'),
      new Country('BB', 'Barbados', '1'),
      new Country('BE', 'Belgium', '32'),
      new Country('BZ', 'Belize', '501'),
      new Country('BM', 'Bermuda', '1'),
      new Country('BR', 'Brazil', '55'),
      new Country('CA', 'Canada', '1'),
      new Country('KY', 'Cayman Islands', '1'),
      new Country('CN', 'China', '86'),
      new Country('DK', 'Denmark', '45'),
      new Country('FI', 'Finland', '358'),
      new Country('FR', 'France', '33'),
      new Country('DE', 'Germany', '49'),
      new Country('GR', 'Greece', '30'),
      new Country('IN', 'India', '91'),
      new Country('ID', 'Indonesia', '62'),
      new Country('IE', 'Ireland', '353'),
      new Country('IL', 'Israel', '972'),
      new Country('IT', 'Italy', '39'),
      new Country('JM', 'Jamaica', '1'),
      new Country('JP', 'Japan', '81'),
      new Country('KR', 'Korea, South', '82'),
      new Country('LU', 'Luxembourg', '352'),
      new Country('MX', 'Mexico', '52'),
      new Country('FM', 'Micronesia, Federated States of', '691'),
      new Country('MC', 'Monaco', '377'),
      new Country('NL', 'Netherlands', '31'),
      new Country('NZ', 'New Zealand', '64'),
      new Country('NO', 'Norway', '47'),
      new Country('PH', 'Philippines', '63'),
      new Country('PL', 'Poland', '48'),
      new Country('PT', 'Portugal', '351'),
      new Country('ES', 'Spain', '34'),
      new Country('SE', 'Sweden', '46'),
      new Country('CH', 'Switzerland', '41'),
      new Country('TW', 'Taiwan', '886'),
      new Country('TH', 'Thailand', '66'),
      new Country('TT', 'Trinidad and Tobago', '1'),
      new Country('AE', 'United Arab Emirates', '971'),
      new Country('GB', 'United Kingdom', '44'),
      new Country('US', 'United States', '1'),
      new Country('VN', 'Vietnam', '84')
  ];
  static STATES = [
      new State('AL', 'Alabama'),
      new State('AK', 'Alaska'),
      new State('AZ', 'Arizona'),
      new State('AR', 'Arkansas'),
      new State('CA', 'California'),
      new State('CO', 'Colorado'),
      new State('CT', 'Connecticut'),
      new State('DE', 'Delaware'),
      new State('FL', 'Florida'),
      new State('GA', 'Georgia'),
      new State('HI', 'Hawaii'),
      new State('ID', 'Idaho'),
      new State('IL', 'Illinois'),
      new State('IN', 'Indiana'),
      new State('IA', 'Iowa'),
      new State('KS', 'Kansas'),
      new State('KY', 'Kentucky'),
      new State('LA', 'Louisiana'),
      new State('ME', 'Maine'),
      new State('MD', 'Maryland'),
      new State('MA', 'Massachusetts'),
      new State('MI', 'Michigan'),
      new State('MN', 'Minnesota'),
      new State('MS', 'Mississippi'),
      new State('MO', 'Missouri'),
      new State('MT', 'Montana'),
      new State('NE', 'Nebraska'),
      new State('NV', 'Nevada'),
      new State('NH', 'New Hampshire'),
      new State('NJ', 'New Jersey'),
      new State('NM', 'New Mexico'),
      new State('NY', 'New York'),
      new State('NC', 'North Carolina'),
      new State('ND', 'North Dakota'),
      new State('OH', 'Ohio'),
      new State('OK', 'Oklahoma'),
      new State('OR', 'Oregon'),
      new State('PA', 'Pennsylvania'),
      new State('RI', 'Rhode Island'),
      new State('SC', 'South Carolina'),
      new State('SD', 'South Dakota'),
      new State('TN', 'Tennessee'),
      new State('TX', 'Texas'),
      new State('UT', 'Utah'),
      new State('VT', 'Vermont'),
      new State('VA', 'Virginia'),
      new State('WA', 'Washington'),
      new State('WV', 'West Virginia'),
      new State('WI', 'Wisconsin'),
      new State('WY', 'Wyoming')
  ];
}
