import React from "react";
import { View, Image } from 'react-native';

import Logo from '../../assets/DIO.png'
import styles from "./styles";

export default Header = () => {
  return(
    <View style={ styles.container }>
      <Image style={styles.img} source={Logo} />
    </View>
  );
}
