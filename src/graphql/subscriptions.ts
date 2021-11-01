/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory {
    onCreateAlbumCategory {
      id
      title
      albums {
        items {
          id
          imageUrl
          headline
          likes
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory {
    onUpdateAlbumCategory {
      id
      title
      albums {
        items {
          id
          imageUrl
          headline
          likes
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory {
    onDeleteAlbumCategory {
      id
      title
      albums {
        items {
          id
          imageUrl
          headline
          likes
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      imageUrl
      headline
      likes
      songs {
        items {
          id
          albumId
          imageUrl
          uri
          artist
          songName
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
      id
      imageUrl
      headline
      likes
      songs {
        items {
          id
          albumId
          imageUrl
          uri
          artist
          songName
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
      id
      imageUrl
      headline
      likes
      songs {
        items {
          id
          albumId
          imageUrl
          uri
          artist
          songName
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      albumId
      imageUrl
      uri
      artist
      songName
      album {
        id
        imageUrl
        headline
        likes
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      albumId
      imageUrl
      uri
      artist
      songName
      album {
        id
        imageUrl
        headline
        likes
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      albumId
      imageUrl
      uri
      artist
      songName
      album {
        id
        imageUrl
        headline
        likes
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
