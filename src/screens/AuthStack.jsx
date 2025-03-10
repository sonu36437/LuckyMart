import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text,TouchableOpacity,Linking } from 'react-native'; 
import Login from './Login';
import SignUp from './SignUp';
import VerificationScreen from './VerificationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/constants';


const Stack = createNativeStackNavigator();





const MailVerification = () => {
  const emailApps = [
    { name: 'Gmail', url: 'https://gmail.app.goo.gl', fallback: 'https://gmail.app.goo.gl' },
    { name: 'Apple Mail', url: 'message://', fallback: null },
    { name: 'Outlook', url: 'ms-outlook://', fallback: 'https://outlook.live.com/' },
    { name: 'Yahoo Mail', url: 'ymail://', fallback: 'https://mail.yahoo.com/' },
  ];

  const openMailApp = async () => {
    Linking.openURL(emailApps[0].url).catch(() => {
      if (emailApps[0].fallback) {
        Linking.openURL(emailApps[0].fallback);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#F9FAFB' }}>
      <Text style={{ fontFamily: 'Outfit-Bold', fontSize: 22, textAlign: 'center', marginBottom: 8, color: '#333' }}>
        Check Your Email
      </Text>
      <Text style={{ fontFamily: 'Outfit-Regular', color: '#666', fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
        We have sent a verification link to your email. Please check and verify to continue.
      </Text>

      <TouchableOpacity
  onPress={openMailApp}
  style={{
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 45,
    borderRadius: 30,
    shadowColor: '#E96D6D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  }}
>
  <Ionicons name="mail-unread-outline" size={22} color="red" style={{ marginRight: 8 }} />
  <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Outfit-Bold' }}>
    Open Gmail
  </Text>
</TouchableOpacity>


      <Text style={{ fontFamily: 'Outfit-Regular', color: '#888', fontSize: 14, textAlign: 'center', marginTop: 25, lineHeight: 22 }}>
        If you're using Outlook, Yahoo, or Apple Mail, please check your inbox manually.
      </Text>
    </View>
  );
};






export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerStyle: { backgroundColor: 'rgb(20,0,0)' },
        headerTintColor: '#fff',
        headerShown: false,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
      // initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} /> 
       <Stack.Screen name="MailVerification" component={MailVerification} />

    </Stack.Navigator>
  );
}
