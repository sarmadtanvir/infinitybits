import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class Upload extends Component{

  constructor(props){
    super(props);
    this.state = {
        image: ''
    }
  }

  async componentDidMount()
  {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permission to make this work!');
      }
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 2],
    });

    if (!result.cancelled) 
    {
        this.props.navigation.navigate('crop', {image: result.uri})
    }
  }

  captureImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 2],
      });
  
      if (!result.cancelled) 
      {
          this.props.navigation.navigate('crop', {image: result.uri})
      }
  }

  render(){
    return(
        <View style = {{backgroundColor: 'white', height: '100%'}}>
            <View style = {{height: '12%', justifyContent: 'center'}}>
                <View style = {{width: '90%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#2e465c"/></View>
                    <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#2e465c', height: 1.5 }} /></View>
                    <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#2e465c"/></View>
                    <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                    <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
                    <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                    <View style = {{width: '6%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
                    <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                    <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
                </View>
                <View style = {{width: '92%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <View style = {{width: '15.5%', alignItems:'flex-start'}}><Text style = {{fontSize: 10, color: '#2e465c'}}>Art Type</Text></View>
                    <View style = {{width: '23%', alignItems:'center'}}><Text style = {{fontSize: 10, color: '#2e465c'}}>Upload Image</Text></View>
                    <View style = {{width: '23%', alignItems:'center'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>Frame Size</Text></View>
                    <View style = {{width: '23%', alignItems:'center'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>Select Frame</Text></View>
                    <View style = {{width: '15.5%', alignItems:'flex-end'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>See All</Text></View>
                </View>
            </View>
            <View style = {{height: '80%', justifyContent: 'center'}}>
                <Image source = {require('./img/frame.png')} style = {{alignSelf: 'center', marginTop: '-20%', height: '35%', resizeMode: 'contain'}}/>
            </View>
            <View style = {{height: '8%', flexDirection: 'row'}}>
                <TouchableOpacity onPress = {() => this.captureImage()} style = {{flex: 1, width: '49.5%', height: '100%', marginHorizontal: '0.25%', backgroundColor: '#112d46', justifyContent: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 13, letterSpacing: 1, textAlign: 'center'}}>CAMERA ROLL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.pickImage()} style = {{flex: 1, width: '49.5%', height: '100%', marginHorizontal: '0.25%', backgroundColor: '#112d46', justifyContent: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 13, letterSpacing: 1, textAlign: 'center'}}>CHOOSE IMAGE</Text>
                </TouchableOpacity>
            </View>
        </View>
      )}
}

export default Upload;