import React, {useRef, useState} from "react";
import { View, Text, StyleSheet , FlatList, Animated} from "react-native";
import styles from "../../styles/styles";
import slides from "./slides";
import CarouItem from "./CarouItem";
import Paginator from "./paginator";
import NextButton from "./NextButton";

export default function CarouScreen({navigation}){

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollx= useRef(new Animated.Value(0)).current;

    const slidesRef = useRef(null);

    const viewableItemsChanged= useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

    return(
       <View style={styless.container}>
        <View style={{flex: 3}}>
            <FlatList data={slides} 
            renderItem={({item}) => <CarouItem item={item} />}
            horizontal 
            showsHorizontalScrollIndicator 
            pagingEnabled 
            bounces={false} ld
            keyExtractor={(item)=>item.id}
            onscroll={Animated.event([{ nativeEvent: {contentOffset: {x: scrollx}} }], {
                useNativeDriver: false
            })}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
        </View>

        <Paginator data={slides} scrollx={scrollx}/>

        <NextButton />

    </View>
    )
}

const styless= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})