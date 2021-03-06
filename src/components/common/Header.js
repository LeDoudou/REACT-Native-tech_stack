import React from 'react';
import { Text, View } from 'react-native';


//Create a Component
//------------------
  const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
          <Text style={textStyle}>{props.headerText}</Text>
          </View>
    );
  };

//Style description
//-----------------
  const styles = {

    viewStyle: {
        backgroundColor: '#F0F0F0',
        height: 60,
        //paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
     fontSize: 20
   }
  };


//render to the device
export { Header };
