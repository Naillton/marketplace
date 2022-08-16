import React , { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import formatValue from '../../utils/format';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default FCart = () => {
  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const carTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, prod) => {
      const total = acc + prod.price * prod.amount;
      return total;
    }, 0);
    return formatValue(cartAmount);
  }, [products]);

  const RouteCart = () => {
    navigation.navigate('Cart');
  }

  return(
    <View
      style={ styles.container }
    >
      <TouchableOpacity
        onPress={() => RouteCart()}
        style={ styles.cartBtn }
      >
        <Feather name="shopping-cart" size={24} color="#f3f9ff" />
        <Text
          style={ styles.cartBtnText}
        >
        { cartSize } { cartSize === 1 ? 'item' : 'itens'}
        </Text>
        <View
          style={ styles.cartPrice}
        >
          <Text
            style={ styles.totalPrice}
          >
            { carTotal }
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
