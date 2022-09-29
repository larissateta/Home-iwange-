import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/routes/stack.navigation';

export default function App() {
  return (
   <NavigationContainer independent={true}>
      <StackNavigation/>
   </NavigationContainer>
);
  }
