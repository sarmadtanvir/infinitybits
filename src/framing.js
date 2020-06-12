import React, {Component} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-elements';

var array = [{
    'image': 'https://c4.wallpaperflare.com/wallpaper/337/135/789/lonely-red-leaf-wallpaper-preview.jpg',
    'title': 'Canvas / Wood',
    'subtitle': 'Mail In',
    'text': 'Art or photos on rolled or stretched canvas or wood board' 
   },
   {
     'image': 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-training-camp-event-flyer-template-design-b8f367b01c0ade04e440ba0246f5eb61_screen.jpg?ts=1589474995',
     'title': 'Print / Poster',
     'subtitle': 'Mail In',
     'text': 'Art prints and movie, music and travel posters' 
    },
    {
     'image': 'https://printmeposter.com/blog/wp-content/uploads/2016/02/Canvas-Prints.jpg',
     'title': 'Original Art',
     'subtitle': 'Mail In',
     'text': 'Paintings, drawings, and pastels on paper' 
    },
    {
     'image': 'https://www.pngkey.com/png/full/845-8458589_certificate-png-transparent-free-certificate-design-psd.png',
     'title': 'Document',
     'subtitle': 'Mail In',
     'text': 'Diplomas, certificates, maps, letters, awards' 
    },
    {
    'image': 'https://www.hotline.co.uk/shared-media/images/products/a746/printed/1500/a746-square-acrylic-keyring-clear.png',
    'title': 'Object',
    'subtitle': 'Mail In',
    'text': 'Matchbooks, keys, coasters, golf tees' 
   },
   {
     'image': 'https://cdn.shopify.com/s/files/1/0869/8174/products/Real_Madrid_1920_Home_Match_Jersey_Personalized_Name_and_Number_1_1024x1024.png?v=1564800390',
     'title': 'Jersey',
     'subtitle': 'Mail In',
     'text': 'Sports jerseys and team t-shirts: $249' 
    },
    {
     'image': 'https://www.clipartkey.com/mpngs/m/76-765850_marriage-clipart-marathi-wedding-wedding-couple-vector-png.png',
     'title': 'Photography',
     'subtitle': 'Mail In',
     'text': 'Printed photography, vintage photos' 
    },
    {
     'image': 'https://crs.ul.com/wp-content/uploads/2018/10/crs-ne-news-Cloth-fabrics-isolated-500x333.png',
     'title': 'Textile',
     'subtitle': 'Mail In',
     'text': 'Art prints and movie, music and travel posters' 
    },
    {
     'image': 'https://lh3.googleusercontent.com/proxy/aYQxFplcw2B1EtAw0djFuQbksTD7fcEQmJ31WWZ7SVbrnA2JvzuBeE6nqvbmSZeGy3xmANj8_p-jugyIRW29E7EJUYQrRYjVVii7to9wDe7Tt7QveAvRX6WfopUD6pXa8GjGuknxLKA',
     'title': 'Newspaper / Magazine',
     'subtitle': 'Mail In',
     'text': 'Newspaper, Magazine, And Books Pages' 
    },
    {
     'image': 'https://img.pngio.com/hd-despicable-me-characters-minions-png-vector-image-free-vector-despicable-me-png-minions-3168_3585.jpg',
     'title': 'Something Else?',
     'subtitle': 'Mail In',
     'text': 'Anything Under 32" X 40" And 1/2" Thick...Thats Not Alive' 
    }
 ];

class Framing extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <View style = {{backgroundColor: 'white', height: '100%'}}>
        <View style = {{height: '12%', justifyContent: 'center'}}>
            <View style = {{width: '90%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#2e465c"/></View>
                <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
                <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
                <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                <View style = {{width: '6%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
                <View style = {{width: '17%'}}><Divider style={{ backgroundColor: '#cbcbcb', height: 1.5 }} /></View>
                <View style = {{width: '6.4%'}}><Icon name="circle-slice-8" size={24} color="#cbcbcb"/></View>
            </View>
            <View style = {{width: '92%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <View style = {{width: '15.5%', alignItems:'flex-start'}}><Text style = {{fontSize: 10, color: '#2e465c'}}>Art Type</Text></View>
                <View style = {{width: '23%', alignItems:'center'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>Upload Image</Text></View>
                <View style = {{width: '23%', alignItems:'center'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>Frame Size</Text></View>
                <View style = {{width: '23%', alignItems:'center'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>Select Frame</Text></View>
                <View style = {{width: '15.5%', alignItems:'flex-end'}}><Text style = {{fontSize: 10, color: '#cbcbcb'}}>See All</Text></View>
            </View>
        </View>
        <View style = {{width: '92%', alignItems: 'center', alignSelf: 'center', marginVertical: '1%', height: '88%'}}>
            {<FlatList data = {array} numColumns = '2' renderItem = {({item, index}) => {return (
                <TouchableOpacity style = {{width: '45%', backgroundColor: '#f9f9f9', marginLeft: '2.5%', marginRight: '2.5%', marginTop: '1%', marginBottom: '5%', elevation: 4}} onPress = {() => this.props.navigation.navigate('upload')}>
                    <View style = {{width: '90%', alignSelf: 'center', backgroundColor: 'white', borderColor: '#e6e6e6', borderWidth: 1, marginTop: '5%', marginTop: '5%', marginBottom: '5%'}}>
                        <View style = {{width: '90%', marginHorizontal: '5%', marginVertical: '5%'}}>
                            <Image style = {{resizeMode: 'contain', aspectRatio: 1/1}} source = {{uri: item.image}}/>
                        </View>
                    </View>
                    <View style = {{width: '90%', alignSelf: 'center', marginBottom: '5%'}}>
                        <Text style = {{fontSize: 12, color: '#2e465c', fontWeight: 'bold', textAlign: 'center', letterSpacing: 1}}>{item.title}</Text>
                        <Text style = {{fontSize: 12, color: '#707070', alignSelf: 'center', marginTop: '3%', marginBottom: '3%'}}>{item.subtitle}</Text>
                        <Divider style={{ backgroundColor: '#e9e9e9', height: 1.5 }} />
                        <Text style = {{fontSize: 12, color: '#9d9d9d', textAlign: 'center', letterSpacing: 0.5, marginTop: '3%', marginBottom: '3%'}}>{item.text}</Text>
                    </View>
                </TouchableOpacity>
            )}} keyExtractor={(item, index) => index.toString()}/>}
        </View>
      </View>
      )}
}

export default Framing;