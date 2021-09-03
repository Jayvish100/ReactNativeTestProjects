import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const App = () => {
  return (
    <ScrollView>
      <View style={styles.blueView} />



      <View style={styles.header}>
        <Image style={styles.image} source={require('./assets/profile.png')} />

        <View style={styles.name}>
          <Text style={styles.profileText1}>Jay Vishwakarma</Text>
          <Text style={styles.profileText2}>jayvish100@gmail.com</Text>
          <Text style={styles.profileText3}>Congratulations!</Text>
        </View>
        <View></View>
        <View></View>
        <View></View>
      </View>




      <View style={styles.direction}>

        <Text style={styles.info}>Profile Info</Text>

        <View style={styles.direction2}>
          <View>
            <Text style={styles.text}>Mobile No. </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textD}>+91 9594645022   &#8250;</Text>
          </View>
        </View>

        <View style={styles.direction2}>
          <View >
            <Text style={styles.text}>Email ID </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textD}>jayvish100@gmail.com   &#8250;</Text>
          </View>
        </View>

        <View style={{
          flexGrow: 5,
          borderColor: '#E0DDDD',
          borderBottomWidth: 1,
          marginHorizontal: width *.060,
          marginVertical: height*.010,
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 100,

        }}>
          <View >
            <Text style={styles.text}>Address </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textD}>Ram Nagar,   &#8250;</Text>
            <Text style={styles.textD}>Behram baug,    </Text>
            <Text style={styles.textD}>Jogeshwari West,    </Text>
            <Text style={styles.textD}>Mumbai    </Text>
          </View>
        </View>

        <View style={styles.direction2}>
          <View >
            <Text style={styles.text}>City </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textD}>Mumbai   &#8250;</Text>
          </View>
        </View>

        <View style={styles.direction2}>
          <View >
            <Text style={styles.text}>State </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textD}>Maharashtra   &#8250;</Text>
          </View>
        </View>

        <View style={styles.direction2}>
          <View >
            <Text style={styles.text}>Pincode </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textD}>400102   &#8250;</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  blueView: {
    height: height * .30,
    backgroundColor: 'skyblue'
  },
  direction: {
    paddingTop: height * .21,
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 1,
    margin: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  direction2: {
    height: 40,
    flex: 1,
    borderColor: '#E0DDDD',
    borderBottomWidth: 1,
    marginHorizontal: width * .060,
    marginVertical: height*.008,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    margin: 1,
    color: 'black'
  },
  textD: {
    color: '#8B8B8B',
    margin: 1
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: height*.010,
    marginLeft: width*.060,
  },
  image: {
    height: height * .2,
    width: width * .4,
    marginTop: -height * .175,
  },
  header: {
    position: 'absolute',
    height: height * .35,
    width: width * .90,
    marginHorizontal: width * .050,
    marginTop: height * .140,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 5,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  name: {
    padding: 5,
    marginTop: height * .02,
  },
  profileText1: {
    color: 'black',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'VeganStyle'
  },
  profileText2: {
    color: '#8B8B8B',
    fontSize: 12,
    alignSelf: 'center',
  },
  profileText3: {
    color: 'blue',
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 10,
    alignSelf: 'center',
    fontFamily: 'VeganStyle'
  }
});

export default App;
