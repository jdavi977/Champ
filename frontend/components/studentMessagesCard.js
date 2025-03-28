import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const StudentMessagesCard = ({image, message}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.messageContainer}>
                <Image 
                source={image}
                style={styles.avatar}
                 />
                <View>
                    <Text>{message}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25, // Makes it circular
        marginRight: 10,
      },
    messageContainer: {
        flexDirection: "row",
    },
});

export default StudentMessagesCard;