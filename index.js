import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}
// firebase errors solution
// https://github.com/firebase/firebase-js-sdk/issues/6253
// https://stackoverflow.com/questions/44037361/cannot-find-entry-file-index-js-with-expo-xde
// https://stackoverflow.com/questions/62649381/invariant-violation-main-has-not-been-registered