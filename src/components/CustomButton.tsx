import React, {FC} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyleIOS,
} from 'react-native';
interface IProps {
  title?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: (even: GestureResponderEvent) => void;
}

interface Styles {
  button: ViewStyle;
  title: TextStyle;
  links: TextStyleIOS;
}

const styles = StyleSheet.create<Styles>({
  links: {
    backgroundColor: 'magenta',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
const CustomButton: FC<IProps> = props => {
  return (
    <TouchableOpacity onPress={props?.onPress}>
      <View style={[styles.button, props.buttonStyle]}>
        <Text style={[styles.title, props.labelStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
