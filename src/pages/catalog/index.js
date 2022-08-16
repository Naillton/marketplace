import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import * as CartActions from '../../store/modules/cart/actions';
import API from '../../services/api';
import FCart from '../../components/FloatingCart/index';
import Format from '../../utils/format';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Catalog(){
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProduct(){
      const { data } = await API.get('/products');
      setProducts(data);
    }
    loadProduct();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={ styles.productContainer}>
        <FlatList
          style={ styles.productList }
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({item}) =>(
            <View style={styles.product}>
              <Image
                style={styles.img}
                source={{ uri: item.image_url }}
              />
              <Text style={styles.productTitle}>{item.title}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.priceProduct}>{Format(item.price)}</Text>
                <TouchableOpacity
                  style={styles.productBtn}
                  onPress={() => handleAddToCart(item.id)}
                >
                  <Text
                    style={ styles.btnText}
                  >
                    ADICIONAR
                  </Text>
                  <AntDesign name="pluscircleo" size={30} color="#d1d7d3" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <FCart />
    </SafeAreaView>
  );
}
