export const Album = {
  albumId: 'albumId_001',  
  albumUrl: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
  artistHeadline: 'Eminem, Tailor Swift, Kristina Agilerra',
  likes: 34,
  songs: [
    {
      id: 1,
      artist: 'Eminem',
      songName: 'Without me1',
      imageUri: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
    },
    {
      id: 2,
      artist: 'Eminem',
      songName: 'Without me2',
      imageUri: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
    },
    {
      id: 3,
      artist: 'Eminem',
      songName: 'Without me3',
      imageUri: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
    }
  ]
};

export const AlbumsMock = [
  {
    albumId: 'albumId_001',  
    albumUrl: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
    artistHeadline: 'Eminem, Tailor Swift, Kristina Agilerra',
  },
  {
    albumId: 'albumId_002',  
    albumUrl: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
    artistHeadline: 'Eminem, Tailor Swift, Kristina Agilerra',
  },
  {
    albumId: 'albumId_003',  
    albumUrl: 'https://yobte.ru/uploads/posts/2019-11/znojnye-devushki-140-foto-39.jpg',
    artistHeadline: 'Eminem, Tailor Swift, Kristina Agilerra',
  }
];

export const albumsCategoryMock = {
  id: '1',
  title: 'Recently played',
  albums: AlbumsMock,
};

export const albumsCategorysMock = [{
    id: '1',
    title: 'Recently played1',
    albums: AlbumsMock,
  },
  {
    id: '2',
    title: 'Recently played2',
    albums: AlbumsMock,
  },
  {
    id: '3',
    title: 'Recently played3',
    albums: AlbumsMock,
  }, 
]

