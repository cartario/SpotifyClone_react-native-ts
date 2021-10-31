import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: { 
    position: 'absolute',
    bottom: 85,      
    width: '100%',    
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',    
    width: '100%', 
    height: 70,    
    backgroundColor: '#131313',
  },
  image: {
    height: '100%',
    width: 70,
  },
  song: {    
    flexDirection: 'row',   
    alignItems: 'center',
    flex: 1,
    marginLeft: 15,
    color: '#fff',    
  },
  artist: {    
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  songName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',    
  },
  progress:{
    height: 3,    
    backgroundColor: 'grey',
  }
})