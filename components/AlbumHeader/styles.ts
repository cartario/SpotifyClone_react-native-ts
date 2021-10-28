import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  poster: {
    width: 160,
    height: 160,
    marginBottom: 30,
    borderRadius: 3,
  },
  artistHeadline: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',    
  },
  likes: {
    marginBottom: 15,
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'lightgrey',
  },
  btn: {
    alignItems: 'center',
    width: '60%',
    padding: 10,    
    backgroundColor: '#1cd05d',
    borderRadius: 50,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  }
})