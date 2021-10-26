import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {    
    flexDirection: 'row', 
    height: 60,  
    marginTop: 15, 
  },
  image: {
    height: '100%',
    width: 60,
  },
  song: {    
    justifyContent: 'space-between',
    marginLeft: 15,
    paddingVertical: 10,
    color: '#fff'
  },
  artist: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#fff',
  },
  songName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey'
  },
})