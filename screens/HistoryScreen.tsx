import * as React from 'react';
import { Divider, Icon, Layout, List, ListItem, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamProps, TabParamProps } from '../types';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';

import history from '../data/history.json';

interface ITimeTable {
  subject: string;
  inTime: string;
  outTime: string;
}

function diffTime(outTime: string, inTime: string): string {
  const time1 = Number(inTime.replace('.', ''));
  const time2 = Number(outTime.replace('.', ''));

  let hourDiff = Math.trunc(time2 / 100) - Math.trunc(time1 / 100) - 1;
  let minDiff = Math.trunc((time2 % 100) + Math.trunc(60 - (time1 % 100)));

  if (minDiff >= 60) {
    hourDiff++;
    minDiff -= 60;
  }

  const result = `${hourDiff === 0 ? '' : `${hourDiff}${minDiff === 0 ? '' : '.'}`}${minDiff === 0 ? '' : `${minDiff}`} ${
    hourDiff === 0 ? 'Minutes' : 'Hours'
  }`;
  return result;
}

export default function HistoryScreen({ navigation }: StackParamProps<'History'>) {
  const renderItem = ({ item, index }: ListRenderItemInfo<ITimeTable>) => (
    <ListItem
      title={item.subject}
      description={`${item.inTime} - ${item.outTime}`}
      accessoryRight={() => <Text>{diffTime(item.outTime, item.inTime)}</Text>}
      onPress={() => navigation.navigate('HistoryDetail', { id: index + 1 })}
    />
  );

  return (
    <Layout style={styles.container}>
      <SafeAreaView />
      <TopNavigation alignment='center' title='History' />
      <Divider />
      <View style={styles.titleContainer}>
        <Icon name='clock-outline' fill='silver' style={{ width: 32, height: 32 }} />
        <Text category='h5' appearance='hint'>
          History
        </Text>
      </View>
      <List renderItem={renderItem} data={history.data} ItemSeparatorComponent={Divider} />
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
