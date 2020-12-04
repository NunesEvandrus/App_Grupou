import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './routes';

import './services/firebase';

export default function App() {
  return (
    <Routes />
  );
}

