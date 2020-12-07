import * as React from 'react';
import { Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamProps } from '../types';
import { StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: StackParamProps<'Home'>) {
  return (
    <Layout style={styles.container}>
      <SafeAreaView />
      <TopNavigation
        alignment='center'
        title='Home'
        accessoryRight={() => <TopNavigationAction icon={(props) => <Icon {...props} name='person' />} onPress={() => navigation.navigate('ProfileScreen')} />}
      />
      <Layout style={styles.container}></Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
