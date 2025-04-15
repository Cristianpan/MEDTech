export interface PageInfo {
  title: string;
  url: string;
  description: string;
  image: string;
}

export interface PageContent {
  title: string;
  url: string, 
  date: string;
  description: string,
  mainImage: string; 
  pageContent: any[][]; // eslint-disable-line @typescript-eslint/no-explicit-any 
  references: string[];
}



