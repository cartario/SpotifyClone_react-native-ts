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

// "listAlbumCategorys
// "items": [
//   {
//     "id": "bc7bcc78-30a9-4712-9669-d728afe632f1",
//     "title": "Happy Tunes"
//   },
//   {
//     "id": "1cbad856-19af-4970-b3f1-e51f9900de6f",
//     "title": "Podcasts"
//   },
//   {
//     "id": "0858551f-f3d1-4b96-9808-86b1c09df5c5",
//     "title": "Lofi"
//   },
//   {
//     "id": "7ca8d12a-a3c4-4232-85a9-97823ada793c",
//     "title": "Happy Tunes"
//   }
// ]


// "listAlbums": {
//   "items": [
//     {
//       "id": "bfa68a76-51d1-4648-827f-7cfb4adc8b8d",
//       "headline": "Eminem2",
//       "albumCategoryId": "1cbad856-19af-4970-b3f1-e51f9900de6f"
//     },
//     {
//       "id": "f4a4115a-be02-49e7-874a-1769905d7459",
//       "headline": "Eminem1",
//       "albumCategoryId": "bc7bcc78-30a9-4712-9669-d728afe632f1"
//     }
//   ]
// }
