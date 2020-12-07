import React from 'react';
import { Image, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction, Text, ListItem } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { StackParamProps } from '../types';
import profile from '../data/profile.json';

export default function ProfileScreen({ navigation }: StackParamProps<'ProfileScreen'>) {
  return (
    <Layout style={styles.container}>
      <SafeAreaView />
      <TopNavigation
        alignment='center'
        title='Profile'
        accessoryLeft={() => <TopNavigationAction icon={(props) => <Icon {...props} name='arrow-ios-back' />} onPress={() => navigation.goBack()} />}
      />
      <Divider />
      <AvatarProfile imageUrl={profile.imageUrl} />
      <Text style={styles.profileName} category='h6'>
        {profile.firstname} {profile.lastname}
      </Text>
      <ProfileDetail title='First name' detail={profile.firstname} />
      <Divider />
      <ProfileDetail title='Last name' detail={profile.lastname} />
      <Divider />
      <ProfilePhone title='Phone' detail={profile.phone} />
    </Layout>
  );
}

const AvatarProfile = (props: { imageUrl: string }) => <Image style={styles.profileImage} source={{ uri: props.imageUrl }} />;

const ProfileDetail = (props: { title: string; detail: string }) => <ListItem title={props.title} accessoryRight={() => <Text>{props.detail}</Text>} />;

const ProfilePhone = (props: { title: string; detail: string }) => (
  <ListItem
    title={props.title}
    accessoryRight={(evaProps) => (
      <>
        <TouchableWithoutFeedback onPress={() => Linking.openURL(`tel:${props.detail}`)}>
          <Icon {...evaProps} name='phone-call' fill='green' />
        </TouchableWithoutFeedback>
        <Text>{props.detail}</Text>
      </>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 20,
    marginBottom: 10,
  },
  profileName: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
});
