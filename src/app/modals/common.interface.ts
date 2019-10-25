export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average?: any;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
}

export interface Externals {
  tvrage?: any;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface HrefLink {
  href: string;
}

export interface ShowLinks {
  self: HrefLink;
  previousepisode: HrefLink;
}

export interface ShowDetailLinks {
  self: HrefLink;
}
