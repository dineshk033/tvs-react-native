import { fetchFeed } from "@/service/fetchFeed";
import axios from "axios";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

export default function BlogIndex() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const res: any = axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml"
      );
      console.log(res);
      //   setData(res.data?.items);
      Alert.alert(JSON.stringify(res.data));
    } catch (error) {
      Alert.alert("oops sometjhing wenrt wrong" + JSON.stringify(error));
    }
  }, []);
  return (
    <View className="flex-1">
      <Text>Blog Index</Text>
      <Link href="/blog/1" className="my-2">
        Blog 1
      </Link>
      <Link href="/blog/2" className="my-2">
        Blog 2
      </Link>
      <Link href="/blog/3" className="my-2">
        Blog 3
      </Link>
      <Link href="/blog/4" className="my-2">
        Blog 4
      </Link>
      {/* <FlatList
        data={[]}
        keyExtractor={(item) => item.guid}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      /> */}
    </View>
  );
}
