export interface PageInfo {
  id: number
  title: string;
  url: string;
  description: string;
  image: string;
}

export interface PageContent {
  title: string;
  url: string, 
  date: string;
  mainImage: string; 
  pageContent: any[][]; // eslint-disable-line @typescript-eslint/no-explicit-any 
  references: string[];
}



