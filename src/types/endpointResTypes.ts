export type EndpointRes = {
  files: EndpointResFile[];
  isArtboard: boolean;
  name: string;
};

export type EndpointResFile = {
  height: number;
  scale: number;
  thumbnails: EndpointResThumb[];
  url: string;
};

export type EndpointResThumb = {
  height: null;
  url: string;
  width: null;
};
