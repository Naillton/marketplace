import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  productContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 80,
    borderRadius: 5,
    marginBottom: 80,
  },

  productList: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20
  },

  product: {
    flex: 1,
    margin: 8,
    backgroundColor: '#686278',
    paddingVertical: 32,
    paddingHorizontal: 12,
    borderRadius: 25,
  },

  img: {
    width: '90%',
    height: 200,
    alignSelf: 'center'
  },

  productTitle: {
    color: '#b9c0d2',
    fontSize: 22,
    marginTop: 10,
    fontWeight: '400',
    textAlign: 'center',
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingVertical: 24,
    paddingLeft: 32,
    paddingRight: 4,
  },

  priceProduct: {
    color: '#f3f9ff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  productBtn: {
    backgroundColor: '#4f5564',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },

  btnText: {
    color: '#b9c0d2',
    fontWeight: '100',
    paddingHorizontal: 4,
    fontSize: 12,
  }
});
