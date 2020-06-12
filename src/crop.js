import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-elements';

class Crop extends Component{

  constructor(props){
    super(props);
    this.state = {
        image: ''
    }
  }

  async UNSAFE_componentWillMount()
  {
    await this.setState({image: this.props.navigation.state.params.image});
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
                <Image source = {{uri: this.state.image}} style = {{alignSelf: 'center', width: '60%', height: '40%', marginTop: '-20%', resizeMode: 'stretch'}}/>
            </View>
            <View style = {{height: '8%', flexDirection: 'row'}}>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('upload')} style = {{flex: 1, width: '49.5%', height: '100%', marginHorizontal: '0.25%', backgroundColor: '#112d46', justifyContent: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 13, letterSpacing: 1, textAlign: 'center'}}>CHANGE PHOTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('dimension', {image: this.state.image})} style = {{flex: 1, width: '49.5%', height: '100%', marginHorizontal: '0.25%', backgroundColor: '#112d46', justifyContent: 'center'}}>
                    <Text style = {{color: 'white', fontSize: 13, letterSpacing: 1, textAlign: 'center'}}>DONE</Text>
                </TouchableOpacity>
            </View>
        </View>
      )}
}

export default Crop;