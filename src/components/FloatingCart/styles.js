import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#e83f5b',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  cartPrice: {
    padding: 10,

  },

  totalPrice: {
    color: '#f3f9ff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cartBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  cartBtnText: {
    flex: 1,
    color: '#f3f9ff',
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 'auto',
  }
});
