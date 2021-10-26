export type SongProps = {
  id: Number,
  artist: string,
  songName: string,
  imageUri: string,
}

export type AlbumProps = {  
  albumId: string;
  albumUrl: string;
  artistHeadline: string;
  likes: Number;
  songs: Array<SongProps>
};

export type AlbumsCategoryProps = {  
  id: string,
  title: string,
  albums: Array<AlbumProps>,
}

export type AlbumsCategoriesProps = AlbumsCategoryProps[];