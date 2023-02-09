import axios from "axios";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

// const image = require('../../../assets/searchicon.png')
const image = {uri:'https://i.postimg.cc/CxTFd7N9/Screenshot-2023-02-08-155058.png'}

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export const Work = () => {
  const [Search, setSearch] = React.useState("");
  const [getSearch, setGetSearch] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (Search.length > 0) {
      getsearch();
    } else {
      setGetSearch([]);
    }
  }, [Search]);

  console.log(Search);

  console.log(getSearch, "getSearchData");
  console.log(Search);

  const getsearch = () => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&query=${Search}&language=en-US&page=1&include_adult=false`,
    })
      .then((data1) => {
        // console.log(data1.data.results)
        setGetSearch(data1.data.results);
        setIsLoading(false);
      })
      .catch((erro) => {
        console.log(erro);
        setIsLoading(false);
      });
  };
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: "#27262b", borderWidth: 0, height: height }}
      >
        <Text
          style={{
            color: "white",
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Search
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#414043",
          }}
        >
          <TextInput
            color="white"
            placeholder="Type title, categories, years, etc"
            placeholderTextColor={"white"}
            backgroundColor="#414043"
            style={{ padding: 10 }}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
          <Feather
            style={{ padding: 10 }}
            name="search"
            size={24}
            color="orange"
          />
        </View>

        {getSearch?.length > 0 ? (
          <ScrollView>
            <View style={{ flesxDirection: "column", padding: 0 }}>
              <Text style={{ color: "white", fontSize: 18, padding: 15 }}>
                Popular Search
              </Text>

              {isLoading ? (
                <ActivityIndicator size={24} color={"white"} />
              ) : null}

              {getSearch.map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#202123",
                      paddingHorizontal: 15,
                      height: height,
                      width: width,
                    }}
                  >
                    <Image source={{ uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{width:220,height:120, borderRadius:10, marginVertical:10}} />
                    <View>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 5,
                          marginVertical: 20,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 5,
                          marginVertical: 0,
                        }}
                      >
                        {item.release_date}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image
              source={image}
              resizeMode="contain"
              style={{ height: 250, width: 250 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Search any Movie
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              Explore our libraries and enjoy {"\n"} this movie with your
              family.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
