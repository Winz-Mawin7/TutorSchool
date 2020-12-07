import * as React from 'react';
import { Divider, Icon, Layout, List, ListItem, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamProps } from '../types';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';

import timeTable from '../data/timeTable.json';

interface ITimeTable {
  subject: string;
  time: string;
}

export default function HomeScreen({ navigation }: StackParamProps<'Home'>) {
  const renderItem = ({ item }: ListRenderItemInfo<ITimeTable>) => <ListItem title={item.subject} description={item.time} />;

  return (
    <Layout style={styles.container}>
      <SafeAreaView />
      <TopNavigation
        alignment='center'
        title='Home'
        accessoryRight={() => <TopNavigationAction icon={(props) => <Icon {...props} name='person' />} onPress={() => navigation.navigate('ProfileScreen')} />}
      />
      <Divider />
      <View style={styles.titleContainer}>
        <Icon name='clock-outline' fill='silver' style={{ width: 32, height: 32 }} />
        <Text category='h5' appearance='hint'>
          Time Table
        </Text>
      </View>
      <List renderItem={renderItem} data={timeTable.data} ItemSeparatorComponent={Divider} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
  },
});
