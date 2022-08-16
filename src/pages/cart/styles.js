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
    borderRadius: 20,
    backgroundColor: '#e83f5b'
  },

  productList: {
    flex: 1,
    padding: (30, 10)
  },

  product: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#fff',
    minWidth: 350,
    minHeight: 120,
    padding: (15, 10),
    borderRadius: 20, 
    flexWrap: 'wrap',
  },

  productImg: {
    height: 92,
    width: 140
  },

  productTitleContainer: {
    fontSize: 16,
    marginLeft: 5,
    marginTop: 10
  },
  
  productTitle: {
    fontSize: 16,
  },

  productPriceContainer: {
    flexDirection: 'column',
  },

  totalPrice: {
    flexDirection: 'row',
    marginTop: 8
  },

  productSinglePrice: {
    fontSize: 12,
    marginTop: 8,
    color: '#414756',
  },

  productPrice: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 16,
    color: '#e83f5b',
  },

  productQuantity: {
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 10,
    fontSize: 16,
    color: '#e83f5b',
  },

  actionContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
  },

  actionBtn: {
    backgroundColor: 'rgba(232, 63, 91, 0.1)',
    borderRadius: 5,
    padding: 12,
    marginBottom: 5,
  },

  totalProductContainer: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: (36, 40),
    borderRadius: 10,
    backgroundColor: '#e83f5b',
  },

  totalProduct: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 15,
    fontWeight: 'bold'
  },

  subTotal: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
})
