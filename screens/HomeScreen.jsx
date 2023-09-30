import * as React from "react";
import { Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { List, Card, Paragraph, Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
      }}
    >
      <ScrollView>
        <Text style={styles.title}>International Potato Day!</Text>
        <Card style={styles.card}></Card>
        <Card.Content>
          <Title>Welcome</Title>
          <Paragraph>Thank you for downloading this app.</Paragraph>
          <Card.Cover
            style={{ marginTop: 10, height: 300 }}
            source={{
              uri: "https://thumbs.dreamstime.com/b/cute-cartoon-potato-character-vector-illustration-isolated-white-background-kawaii-potato-cute-cartoon-potato-character-vector-139624315.jpg",
            }}
          ></Card.Cover>
        </Card.Content>
        <List.Section>
          <List.Accordion title = 'What is this for?'>
            <List.Item title = 'We celebrate the birth of the potat from the Holy Potat.' />
          </List.Accordion>
          <List.Accordion title = 'When will this be?'>
            <List.Item title = 'The first of December is the birthday of the potat.' />
          </List.Accordion>
          <List.Accordion title = 'Where will this be?'>
            <List.Item title = 'Wherever there are followers of the potat.' />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
});
