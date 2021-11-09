import React, {Component} from "react";
import {View,Text,Flatlist,StyleSheet,Alert,SafeAreaView} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            listData:[],
            url: "http://localhost:5000"
        };
    }

    componentDidMount(){
        this.getStars();
    }

    getStars=()=>{
        const {url}=this.state;
        /*Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the 
        browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and 
        responses and enables client-side protection against XSRF. It also has the ability to cancel requests.*/
        axios
        .get(url)
        .then(response=>{
            return this.setState({
                listData:response.data.data
            });
        })
        .catch(erorr=>{
            Alert.alert(error.message);
        })
    }

    renderItem=({item,index})=>{
        <ListItem
        key={index}
        title={`Star:${item.name}`}
        subtitle={`Distance:${item.distance}`}
        titleStyle={styles.title}
        containerStyle={styles.listContainer}
        bottomDivider
        chevron
        onPress={()=>{
            this.props.navigation.navigate("Details",{star_name:item.name})
        }}
        />
    };

    keyExtractor=(iten,index)=>index.toString();

    render(){
        return(
        <ScrollView>
        <View style={styles.container}>
            <SafeAreaView/>
            <View style={styles.upperContainer}>
                <Text style={styles.headerText}>
                    Stars World🌎
                </Text>
            </View>
            <View style={styles.lowerContainer}>
                <Flatlist
                    keyExtractor={this.keyExtractor}
                    data={this.state.listData}
                    renderItem={this.renderItem}
                />
            </View>
        </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#edc988"
    },
    upperContainer: {
      flex: 0.1,
      justifyContent: "center",
      alignItems: "center"
    },
    headerText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#132743"
    },
    lowerContainer: {
      flex: 0.9
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    emptyContainerText: {
      fontSize: 20
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#d7385e"
    },
    listContainer: {
      backgroundColor: "#eeecda"
    }
  });