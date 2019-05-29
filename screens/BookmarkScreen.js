import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Icon} from 'native-base';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';


export default class BookMarkScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <TouchableOpacity onPress={() => navigation.openDrawer()}><Thumbnail 
          source={require('../assets/images/robot-dev.png')} 
          style={{ height: 40, width: 40}} 
          onPress={() => navigation.openDrawer()}
          /></TouchableOpacity>,
      title: 'Umjito',
      drawerLabel: 'Bookmark',
      drawerIcon: (
          <Image source={require('../assets/images/robot-dev.png')} /> 
        )
    };
  };

  constructor(props) {
      super(props);
      this.state = { isLoading: true, dataSource: [] }
  }

  renderItem = ({item}) => {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail 
              source={{uri: item.avatar}}
            />
            <Body>
              <Text>{item.first_name} {item.last_name}</Text>
              <Text note>{item.email}</Text>
            </Body>
          </Left>        
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: item.avatar}} style={{height: 200, width: null, flex: 1}} />
        </CardItem>
      </Card>
    )
  }

  renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}}>
      </View>
      )
  }

  componentDidMount(){
    const url = 'https://reqres.in/api/users?page=2'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.data,
          isLoading: false
        })
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => 'list-item-${index}'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
