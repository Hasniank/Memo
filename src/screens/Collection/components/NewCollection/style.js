import {StyleSheet} from 'react-native';
import {ScreenLayouts} from '../../../../constant';

export const Styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1D28',
    },
    text: {
      color: '#fff',
    },
    header: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      width: ScreenLayouts.screenWidth * 1,
      height: ScreenLayouts.screenHeight * 0.1,
    },
    newCollectionText: {
      color: '#fff',
      fontSize: 16,
    },
    buttonContainer: {
      width: ScreenLayouts.screenWidth * 1,
      flexDirection: 'row',
    },
    DetailsButton: {
      borderBottomWidth: 3,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#1F1D28',
      borderColor: '#9C81EA',
    },
    DetailsButtonSelect: {
      borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#9C81EA',
      borderColor: '#1F1D28',
    },
    CollectionButton: {
      //   borderBottomWidth: 2,
      width: ScreenLayouts.screenWidth * 0.5,
      //   borderColor: '#1F1D28',
      //   borderColor: '#9C81EA',
    },
    DetailsButtonText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
    CollectionButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
    },
  });