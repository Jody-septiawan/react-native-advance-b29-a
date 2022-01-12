import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from 'axios'

const PostDetail = (props) => {
  //init Props
  const id = props.route.params.id
  const body = props.route.params.body
  const title = props.route.params.title

  //Init State
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Create LifeCycle
  useEffect(()=>{
    getComment()
  }, [])
  //Function Exception

  // Create Function to fetch
  const getComment = () => {
    setIsLoading(true)
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res)=>{
            setComments(res.data)
            setIsLoading(false)
        })
        .catch(()=> {
            alert('Error Get Comments')
            setIsLoading(false)
        })
  }

  //   Create Component List
  const _renderItem = ({item}) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{item.email}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
              {item.name} - {item.body}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>
      <Text h2 style={{fontWeight: 'bold'}}>{title}</Text>
      <Text style={{marginTop: 20}}>{body}</Text>

      <Text style={{marginTop: 20, color: 'grey'}}>Comments</Text>

      <FlatList
        data={comments}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getComment} />
        }
      />
      
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});