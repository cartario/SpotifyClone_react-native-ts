/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlbumCategoryInput = {
  id?: string | null,
  title: string,
};

export type ModelAlbumCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryConditionInput | null > | null,
  or?: Array< ModelAlbumCategoryConditionInput | null > | null,
  not?: ModelAlbumCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AlbumCategory = {
  __typename: "AlbumCategory",
  id: string,
  title: string,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items?:  Array<Album | null > | null,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  imageUrl: string,
  headline: string,
  likes: number,
  songs?: ModelSongConnection | null,
  albumCategoryId: string,
  albumCategory?: AlbumCategory | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  albumId: string,
  imageUrl: string,
  uri: string,
  artist: string,
  songName: string,
  album?: Album | null,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAlbumCategoryInput = {
  id: string,
  title?: string | null,
};

export type DeleteAlbumCategoryInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  imageUrl: string,
  headline: string,
  likes: number,
  albumCategoryId: string,
};

export type ModelAlbumConditionInput = {
  imageUrl?: ModelStringInput | null,
  headline?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  albumCategoryId?: ModelIDInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAlbumInput = {
  id: string,
  imageUrl?: string | null,
  headline?: string | null,
  likes?: number | null,
  albumCategoryId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  albumId: string,
  imageUrl: string,
  uri: string,
  artist: string,
  songName: string,
  content: string,
};

export type ModelSongConditionInput = {
  albumId?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  songName?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  albumId?: string | null,
  imageUrl?: string | null,
  uri?: string | null,
  artist?: string | null,
  songName?: string | null,
  content?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelAlbumCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryFilterInput | null > | null,
  or?: Array< ModelAlbumCategoryFilterInput | null > | null,
  not?: ModelAlbumCategoryFilterInput | null,
};

export type ModelAlbumCategoryConnection = {
  __typename: "ModelAlbumCategoryConnection",
  items?:  Array<AlbumCategory | null > | null,
  nextToken?: string | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  headline?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  albumCategoryId?: ModelIDInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  albumId?: ModelIDInput | null,
  imageUrl?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  songName?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type CreateAlbumCategoryMutationVariables = {
  input: CreateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type CreateAlbumCategoryMutation = {
  createAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumCategoryMutationVariables = {
  input: UpdateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type UpdateAlbumCategoryMutation = {
  updateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumCategoryMutationVariables = {
  input: DeleteAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type DeleteAlbumCategoryMutation = {
  deleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAlbumCategoryQueryVariables = {
  id: string,
};

export type GetAlbumCategoryQuery = {
  getAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumCategorysQueryVariables = {
  filter?: ModelAlbumCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumCategorysQuery = {
  listAlbumCategorys?:  {
    __typename: "ModelAlbumCategoryConnection",
    items?:  Array< {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items?:  Array< {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      albumId: string,
      imageUrl: string,
      uri: string,
      artist: string,
      songName: string,
      album?:  {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAlbumCategorySubscription = {
  onCreateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumCategorySubscription = {
  onUpdateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumCategorySubscription = {
  onDeleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items?:  Array< {
        __typename: "Album",
        id: string,
        imageUrl: string,
        headline: string,
        likes: number,
        albumCategoryId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    imageUrl: string,
    headline: string,
    likes: number,
    songs?:  {
      __typename: "ModelSongConnection",
      items?:  Array< {
        __typename: "Song",
        id: string,
        albumId: string,
        imageUrl: string,
        uri: string,
        artist: string,
        songName: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    albumCategoryId: string,
    albumCategory?:  {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    albumId: string,
    imageUrl: string,
    uri: string,
    artist: string,
    songName: string,
    album?:  {
      __typename: "Album",
      id: string,
      imageUrl: string,
      headline: string,
      likes: number,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albumCategoryId: string,
      albumCategory?:  {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
