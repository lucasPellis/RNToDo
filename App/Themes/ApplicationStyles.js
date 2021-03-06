import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      backgroundColor: Colors.background
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    groupAroundContainer: {
      margin: Metrics.smallMargin,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    groupBetweenContainer: {
      margin: Metrics.smallMargin,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    centered:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    screenContainer: {
      height:Metrics.screenHeight - Metrics.navBarHeight, 
      marginBottom:0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:Colors.background
    },
  },
}

export default ApplicationStyles
