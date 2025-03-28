import React, {useState} from 'react';
import { View, Text, FlatList} from 'react-native';
import StudentMessagesCard from '../components/studentMessagesCard';
import {messageData as messageDataArray} from '../utils/messageData';

function MessagesScreen() {
    const [messageData, setMessagedata] = useState(messageDataArray);

    return (
        <View>
            <View>
                <Text>Announcements</Text>
                <StudentMessagesCard/>
            </View>
            <View>
                <Text>Messages</Text>
                <FlatList
                    data={messageData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <StudentMessagesCard
                            image = {item.image}
                            message = {item.message}
                        />
                    )}
                />
            </View>
        </View>
    );
} 

export default MessagesScreen;