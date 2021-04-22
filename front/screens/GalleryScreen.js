import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Badge, Text } from 'react-native-elements';

import {connect} from 'react-redux';

function GalleryScreen(props) {

  let cardList = props.pictureList.map((data, i)=> {
      
    var badgeGlasses;
    if(data.glasses) {
      badgeGlasses = <Badge status="success" value="lunette"/>
    }
    var badgeBeard;
    if(data.beard) {
      badgeBeard = <Badge status="success" value="barbe"/>;
    }
    var badgeHappy;
    if(data.happy) {
      badgeHappy = <Badge status="success" value="joyeux"/>;
    }
    var badgeHair;
    if(data.hairColor) {
      badgeHair = <Badge status="success" value={data.hairColor}/>
    }

    return (
      <Card key={i}>
        <Card.Image
          style={{ width: '100%', height: 170, marginBottom: 10 }}
          source={{ uri: data.url }}
        />
        <Badge status="success" value={data.gender}/>
        <Badge status="success" value={data.age}/>
        {badgeGlasses}
        {badgeBeard}
        {badgeHappy}
        {badgeHair}
      </Card>
    );
  });

  return (
    <ScrollView style={{marginTop: 25}}>
      
      <Text h4 style={{textAlign: 'center'}}>John's Gallery</Text>

      {cardList}
    
    </ScrollView>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return { pictureList : state.pictureList }
}

export default connect(
  mapStateToProps, 
  null
)(GalleryScreen);
