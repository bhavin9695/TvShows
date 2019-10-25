import {Externals, Image, Network, Rating, Schedule, ShowDetailLinks, ShowLinks} from './common.interface';

export  class ShowDetailModal {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  image?: any;
  summary: string;
  show: Show;
  _links: ShowDetailLinks;
}

export class Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite?: any;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: ShowLinks;
}
