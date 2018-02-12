import React, { Component, } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    // backgroundColor: 'black',
    // color: 'white',
    // fontWeight: 'bold'
  },
  photo: {
    resizeMode: 'contain',
    height: 100,
    margin: 20
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  stepSubtitle: {
    opacity: 0.7,
    padding: 5,
    fontWeight: 'bold',
    margin: 10
  },
  stepTimer: {
    fontSize: 50,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    overflow: 'hidden',
    fontWeight: 'bold'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    // flex: 1
  },
  button: {
    backgroundColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    // opacity: 0.5
  },
  navigationMenu: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  navigationButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRightWidth: 1
  }
});
