import axios from "axios";
import React, {Component} from "react";
import {View,Text,StyleSheet,Alert,SafeAreaView} from "react-native";
import { Card } from "react-native-elements/dist/card/Card";

export default class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            details:{},
            url:`http://localhost:5000/star?name=${this.props.navigation.getParam(
                "star_name"
            )}`
        };
    }


    render(){
        const{details}=this.state;
        if(details.specifications){
            return(
                <View style={styles.container}>
                    <Card
                     title={details.name}
                    >
                    <View>
                        <Text style={styles.cardItem}>{`Distance: ${details.distance}`}</Text>
                        <Text style={styles.cardItem}>{`Mass: ${details.mass}`}</Text>
                        <Text style={styles.cardItem}>{`Radius: ${details.radius}`}</Text>
                        <Text style={styles.cardItem}>{`Gravity: ${details.gravity}`}</Text>
                    </View>
                    <View style={[styles.cardItem,{flexDirection:"column"}]}>
                        <Text>{details.specifications?`Specifications:`:""}</Text>
                        {details.specifications.map((item,index)=>{
                            <Text key={index.toString()} style={{marginLeft:50}}>
                                {item}
                            </Text>
                        })}
                    </View>
                </Card>
            </View>
        );
    }
    return null;
    }
}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1 
    }, 
    cardItem: { 
        marginBottom: 10 
    } 
});