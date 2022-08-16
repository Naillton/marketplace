import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

const EmptyCart = () => {
  const animation = useRef(null);
  useEffect(() => {
    setTimeout(() => animation.current?.play());
  }, [])
  return(
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={styles.emptyCart}
        resizeMode="contain"
        source={require('../../../empty-cart.json')}
      />
      <Text style={styles.cartText}>
        Ooohh não, meu carrinho está vazio.
      </Text>
    </View>
  );
};

export default EmptyCart;
