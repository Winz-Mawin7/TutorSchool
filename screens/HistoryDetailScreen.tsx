import { Layout, TopNavigation, TopNavigationAction, Icon, Divider, Text, List, ListItem, Avatar } from '@ui-kitten/components';
import React from 'react';
import { ListRenderItemInfo, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParamProps } from '../types';

import classroomData from '../data/historyDetail.json';

interface IStudent {
  id: number;
  fullname: string;
  lastname: string;
  remain: number;
  imageUrl: string;
  inTime: string;
  outTime: string;
}

export default function HistoryDetailScreen({ navigation, route }: StackParamProps<'HistoryDetail'>) {
  const { id } = route.params;
  const classroom = classroomData.data.find((item) => item.id === id);

  const renderItem = ({ item }: ListRenderItemInfo<IStudent>) => (
    <ListItem
      title={`${item.fullname} ${item.lastname}`}
      description={`${item.inTime} - ${item.outTime}`}
      accessoryLeft={() => <Avatar source={{ uri: item.imageUrl }} />}
      accessoryRight={() => (
        <Text category='h6' status='success' style={{ fontWeight: 'bold' }}>
          {item.remain}
        </Text>
      )}
    />
  );

  return (
    <Layout style={styles.container}>
      <SafeAreaView />
      <TopNavigation
        alignment='center'
        title='Detail'
        accessoryLeft={() => <TopNavigationAction icon={(props) => <Icon {...props} name='arrow-ios-back' />} onPress={() => navigation.goBack()} />}
      />
      <Divider />
      <Layout style={styles.layoutContainer}>
        <Text category='h1'>{classroom?.time}</Text>
        <Text category='h2' appearance='hint'>
          {classroom?.subject}
        </Text>
        <Text style={{ alignSelf: 'flex-end', marginTop: 10 }}>Remain</Text>
        <List renderItem={renderItem} data={classroom?.students} ItemSeparatorComponent={Divider} />
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});
