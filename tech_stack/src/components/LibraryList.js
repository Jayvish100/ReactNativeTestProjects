import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const LibraryList = ({ libraries }) => {

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={libraries}
                keyExtractor={(library) => library.id}
                renderItem={({ item }) => {
                    return <ListItem library={item} />
                }}
            />
        </View>
    );
};

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);