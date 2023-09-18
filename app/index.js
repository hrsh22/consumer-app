import { Link, Stack } from "expo-router";
import { Image, Text, View } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 25, height: 25 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Login",
          headerStyle: { backgroundColor: "#73f077" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Text>Click on the links below: </Text>
      <Link href={{ pathname: "home", params: { name: "home" } }}>
        Go to Homepage
      </Link>
      <Link href={{ pathname: "login", params: { name: "login" } }}>
        Go to Login
      </Link>
      <Link href={{ pathname: "signup", params: { name: "signup" } }}>
        Go to Signup
      </Link>
      <Link href={{ pathname: "vouchers", params: { name: "vouchers" } }}>
        Go to Vouchers
      </Link>
      <Link href={{ pathname: "schemes", params: { name: "schemes" } }}>
        Go to Schemes
      </Link>
    </View>
  );
}
