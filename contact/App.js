import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';



const App = () => {

  const contacts = [
    {
      name: 'Contact 1',
      number: '6569623190',
    },
    {
      name: 'Contact 2',
      number: '3599354823',
    },
    {
      name: 'Contact 3',
      number: '3007634076',
    },
    {
      name: 'Contact 4',
      number: '6553572449',
    },
    {
      name: 'Contact 5',
      number: '6937319645',
    },
    {
      name: 'Contact 6',
      number: '5057484761',
    },
    {
      name: 'Contact 7',
      number: '1697081921',
    },
    {
      name: 'Contact 8',
      number: '3206904848',
    },
    {
      name: 'Contact 9',
      number: '8212330971',
    },
    {
      name: 'Contact 10',
      number: '1077588375',
    },
    {
      name: 'Contact 11',
      number: '8673319156',
    },
    {
      name: 'Contact 12',
      number: '3568045121',
    },
    {
      name: 'Contact 13',
      number: '2101256764',
    },
    {
      name: 'Contact 14',
      number: '3331460486',
    },
    {
      name: 'Contact 15',
      number: '8852097480',
    },
    {
      name: 'Contact 16',
      number: '1559290322',
    },
    {
      name: 'Contact 17',
      number: '1966278293',
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <View >
      <FlatList
        style={styles.list}
        data={contacts}
        keyExtractor={(contact) => contact.number}
        renderItem={({ item }) => {
          return (
            <View style={styles.renderItemStyle}>
              <Image style={styles.iconStyle} source={require('./assets/contacts.png')}/>
              <View style={styles.renderItemStyle2}>
              <Text style={styles.nameStyle}>{item.name}</Text>
              <Text style={styles.numberStyle}>{item.number}</Text>
              </View>
            </View>
          )
        }}
      />
      </View>
    </View>
  );


}


const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  numberStyle: {
    borderTopColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#E0DDDD'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  list: {
    marginVertical: 5
  },
  renderItemStyle: {
    backgroundColor: '#F0EEEE',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 5,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  renderItemStyle2: {
    flexDirection: 'column'
  },
  iconStyle: {
    height: 50,
    width: 50,
    marginHorizontal: 15,
    marginTop: 10
  }
});

export default App;