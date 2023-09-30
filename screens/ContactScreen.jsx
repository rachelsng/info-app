import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Title, List } from "react-native-paper";

// export default function ContactScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Contacts!</Text>
//       </View>
//     );
//   }

const contactsData = [
  {
    name: "Potato Potatoson",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Mrs Potatodottir",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    name: "Jane",
    title: "CTO",
    company: "Baskets of Biskits",
    pic: "https://randomuser.me/portraits/men/2.jpg",
  },
];

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      {/* <Title style={styles.title}> Contacts </Title> */}
      <View style={styles.list}>
        {contactsData.map((item) => {
          return (
            <List.Item
              title={item.name}
              description={(item.company, item.title)}
              left={(props) => (
                <Image
                  {...props}
                  style={styles.icon}
                  source={{ uri: item.pic }}
                />
              )}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
