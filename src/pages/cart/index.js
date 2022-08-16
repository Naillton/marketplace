import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity 
} from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';
import EmptyCart from '../../components/Empty';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import formatValue from '../../utils/format';

export default Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(({ cart }) => cart);
  const cartSize = useMemo(() => {
    if (products.length > 1 || products.length === 0) {
      return `${products.length} itens`
    }
  
    if (products.length === 1) {
      return `${products.length} item`
    }

  }, [products]);

  const total = useMemo(() => {
    const value = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount;
      return totalPrice;
    }, 0);
    return formatValue(value);
  }, [products]);

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function removeFromCart(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  return(
    <SafeAreaView style={ styles.container }>
      <View
        style={ styles.productContainer }
      >
        <FlatList
          style={ styles.productList }
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) => (
            <View style={styles.product}>
              <Image
                style={styles.productImg}
                source={{ uri: item.image_url}}
              />
              <View style={styles.productTitleContainer}>
                <Text
                  style={styles.productTitle}
                >
                  {item.title}
                </Text>
                <View style={styles.productPriceContainer}>
                  <Text
                    style={styles.productSinglePrice}
                  >
                    {formatValue(item.price)}
                  </Text>
                  <View style={styles.productPriceContainer}>
                    <Text
                      style={styles.productQuantity}
                    >
                      {`${item.amount} X`}
                    </Text>
                    <Text style={styles.totalPrice}>
                      {formatValue(item.price * item.amount)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  onPress={() => increment(item)}
                  style={styles.actionBtn}
                >
                  <Feather name="plus" size={16} color="#e83f5b" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    item.amount > 1 ? decrement(item) : removeFromCart(item.id)
                  }
                  style={styles.actionBtn}
                >
                  <Feather name="minus" size={16} color="#e83f5b" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.totalProductContainer}>
        <Feather name="shopping-cart" size={24} color="#fff" />
        <Text style={styles.totalProduct}>{cartSize}</Text>
        <Text style={styles.subTotal}>{total}</Text>
      </View>
    </SafeAreaView>
  );
};
