export type AlbumProps = {  
  albumId: string;
  albumUrl: string;
  artistHeadline: string;
};

export type AlbumsCategoryProps = {  
  id: string,
  title: string,
  albums: Array<AlbumProps>,
}