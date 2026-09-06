export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type MediaItem = {
  id: string;
  src: string;
  alt: string;
  filename: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  short: string;
  desc: string;
  categoryId: string;
  partners: string[];
  icon: string;
  imageIds: string[];
};

export type Brand = {
  id: string;
  name: string;
  products: string[];
  logo: string;
};

export type GalleryItem = {
  id: string;
  mediaId: string;
};

export type CmsData = {
  products: Product[];
  categories: Category[];
  media: MediaItem[];
  brands: Brand[];
  gallery: GalleryItem[];
};
