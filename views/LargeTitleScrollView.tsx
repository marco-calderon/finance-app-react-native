// /* eslint-disable no-use-before-define */
// import React, { PureComponent } from 'react'
// import {
//   View,
//   ScrollView,
//   Text,
//   Animated,
//   Dimensions,
//   StyleProp,
//   TextStyle,
//   ViewStyle,
//   ScrollViewProps,
//   NativeScrollEvent,
//   NativeSyntheticEvent,
//   LayoutChangeEvent,
//   StyleSheet,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native'
// import { ifIphoneX } from 'react-native-iphone-x-helper'
// import { FadeDirection, Fade } from 'components/animation/Fade'
// import { iOSColors } from 'react-native-typography'

// const { height } = Dimensions.get('window')
// const SEARCH_BAR_HEIGHT = 40

// interface HeaderScrollViewProps {
//   title?: string
//   titleStyle?: StyleProp<TextStyle>
//   headlineStyle?: StyleProp<TextStyle>
//   children?: React.ReactNode
//   containerStyle?: StyleProp<ViewStyle>
//   headerContainerStyle?: StyleProp<ViewStyle>
//   headerComponentContainerStyle?: StyleProp<ViewStyle>
//   scrollContainerStyle?: StyleProp<ViewStyle>
//   fadeDirection?: FadeDirection
//   scrollViewProps?: ScrollViewProps
//   showSearchComponent?: boolean
//   searchBarHeight?: number
// }

// export class HeaderScrollView extends PureComponent<HeaderScrollViewProps> {
//   static defaultProps = {
//     scrollViewProps: {},
//     searchBarHeight: SEARCH_BAR_HEIGHT,
//     showSearchComponent: true,
//     ScrollComponent: ScrollView,
//   }

//   state = {
//     headerHeight: 0,
//     headerY: 0,
//     largeTitleHeight: undefined,
//     isHeaderScrolled: false,
//     searchBarShrinking: false,
//     searchBarFixed: false,
//   }

//   scrollAnimatedValue = new Animated.Value(0)

//   componentDidMount = () => {
//     const { showSearchComponent } = this.props
//     if (showSearchComponent) {
//       this.scrollAnimatedValue.addListener((value) => {
//         const { searchBarFixed } = this.state
//         const { searchBarHeight = SEARCH_BAR_HEIGHT } = this.props
//         if (
//           value.value < -(searchBarHeight + styles.searchContainer.marginTop)
//           && !searchBarFixed
//         ) {
//           this.setState({
//             searchBarFixed: true,
//             searchBarShrinking: false,
//           })
//         } else if (value.value > 0 && searchBarFixed) {
//           this.setState({
//             searchBarFixed: false,
//             searchBarShrinking: true,
//           })
//         }
//       })
//     }
//   }

//   onLayout = (event: LayoutChangeEvent): void => {
//     this.setState({
//       headerHeight: event.nativeEvent.layout.height,
//       headerY: event.nativeEvent.layout.y,
//     })
//   }

//   onLargeTitleLayout = (event: LayoutChangeEvent) => {
//     const { largeTitleHeight } = this.state
//     const { searchBarHeight = 40 } = this.props
//     if (!largeTitleHeight) {
//       this.setState({
//         largeTitleHeight: event.nativeEvent.layout.height - searchBarHeight + 15,
//       })
//     }
//   }

//   handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const { headerHeight, headerY, isHeaderScrolled: stateIsScrolled } = this.state
//     const offset = event.nativeEvent.contentOffset.y
//     const scrollHeaderOffset = headerHeight + headerY - 8
//     const isHeaderScrolled = scrollHeaderOffset < offset

//     if (!stateIsScrolled && isHeaderScrolled) {
//       this.setState({
//         isHeaderScrolled,
//       })
//     }

//     if (stateIsScrolled && !isHeaderScrolled) {
//       this.setState({
//         isHeaderScrolled,
//       })
//     }
//   }

//   render() {
//     const {
//       children,
//       title = '',
//       titleStyle,
//       containerStyle = {},
//       headerContainerStyle = {},
//       headerComponentContainerStyle = {},
//       headlineStyle = {},
//       scrollContainerStyle = {},
//       fadeDirection,
//       scrollViewProps = {},
//       searchBarHeight = SEARCH_BAR_HEIGHT,
//       showSearchComponent,
//     } = this.props
//     const {
//       isHeaderScrolled,
//       searchBarFixed,
//       searchBarShrinking,
//       largeTitleHeight: _largeTitleHeight,
//     } = this.state

//     const fontSize = titleStyle ? (titleStyle as any).fontSize : 34
//     const titleStyles = {
//       fontSize,
//       lineHeight: fontSize * 1.2,
//     }
//     const estimatedLargeTitleHeight = titleStyles.lineHeight + ifIphoneX(44, 0)
//     const largeTitleHeight = _largeTitleHeight || estimatedLargeTitleHeight
//     const expandedLargeTitleHeight = largeTitleHeight
//       + searchBarHeight
//       + styles.searchContainer.marginTop

//     const animatedFontSize = this.scrollAnimatedValue.interpolate({
//       inputRange: [-height, 100],
//       outputRange: [fontSize * 1.75, fontSize],
//       extrapolate: 'clamp',
//     })

//     const animatedSearchScale = this.scrollAnimatedValue.interpolate({
//       inputRange: [-searchBarHeight, 0],
//       outputRange: [searchBarHeight, 0],
//       extrapolate: 'clamp',
//     })

//     const animatedSearchScaleReverse = this.scrollAnimatedValue.interpolate({
//       inputRange: [0, searchBarHeight],
//       outputRange: [searchBarHeight, 0],
//       extrapolate: 'clamp',
//     })

//     const animationLargeTitleHeight = this.scrollAnimatedValue.interpolate({
//       inputRange: [-searchBarHeight, 0],
//       outputRange: [expandedLargeTitleHeight, largeTitleHeight],
//       extrapolate: 'clamp',
//     })

//     const animationLargeTitleHeightShrink = this.scrollAnimatedValue.interpolate({
//       inputRange: [0, searchBarHeight],
//       outputRange: [expandedLargeTitleHeight, largeTitleHeight],
//       extrapolate: 'clamp',
//     })

//     const largeTitleAnimation = searchBarShrinking
//       ? animationLargeTitleHeightShrink
//       : animationLargeTitleHeight

//     const searchFieldAnimation = searchBarShrinking
//       ? animatedSearchScaleReverse
//       : animatedSearchScale

//     return (
//       <View style={[styles.container, containerStyle]}>
//         <View style={[styles.headerContainer, headerContainerStyle]}>
//           <SafeAreaView style={[styles.headerComponentContainer, headerComponentContainerStyle]}>
//             <View style={styles.headerComponentLeft}>
//               <TouchableOpacity>
//                 <Text style={styles.defaultButton}>Edit</Text>
//               </TouchableOpacity>
//             </View>
//             <Fade
//               style={styles.headerComponentMain}
//               visible={isHeaderScrolled}
//               direction={fadeDirection}
//             >
//               <Text style={[styles.headline, headlineStyle]}>{title}</Text>
//             </Fade>
//             <View />
//           </SafeAreaView>
//         </View>
//         <ScrollView
//           onScroll={Animated.event(
//             [
//               {
//                 nativeEvent: { contentOffset: { y: this.scrollAnimatedValue } },
//               },
//             ],
//             {
//               listener: this.handleScroll,
//             },
//           )}
//           scrollEventThrottle={8}
//           contentContainerStyle={scrollContainerStyle}
//           {...scrollViewProps}
//         >
//           <React.Fragment>
//             <Animated.View
//               style={[
//                 styles.largeHeader,
//                 showSearchComponent
//                   ? {
//                     height: searchBarFixed ? expandedLargeTitleHeight : largeTitleAnimation,
//                   }
//                   : {
//                     paddingBottom: 15,
//                   },
//               ]}
//               onLayout={this.onLargeTitleLayout}
//             >
//               <View style={styles.scroll}>
//                 <Animated.Text
//                   style={[
//                     styles.title,
//                     titleStyle,
//                     titleStyles,
//                     {
//                       fontSize: animatedFontSize,
//                     },
//                   ]}
//                   onLayout={this.onLayout}
//                 >
//                   {title}
//                 </Animated.Text>
//               </View>
//               {showSearchComponent ? (
//                 <Animated.View
//                   style={[
//                     styles.searchContainer,
//                     { height: searchBarFixed ? searchBarHeight : searchFieldAnimation },
//                   ]}
//                 >
//                   <Fade visible={searchBarFixed}>
//                     <TextInput placeholder="Search" />
//                   </Fade>
//                 </Animated.View>
//               ) : null}
//             </Animated.View>
//             <Animated.View style={styles.children}>{children}</Animated.View>
//           </React.Fragment>
//         </ScrollView>
//       </View>
//     )
//   }
// }

// const containerHeight = ifIphoneX(88, 60)

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'transparent' },
//   headerContainer: {
//     height: containerHeight,
//   },
//   largeHeader: {
//     borderBottomColor: 'rgba(0, 0, 0, 0.2)',
//     borderBottomWidth: 1,
//     backgroundColor: 'white',
//   },
//   headerComponentContainer: {
//     height: containerHeight,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     paddingBottom: 12,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   headerComponentLeft: {
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   headerComponentMain: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerComponentRight: {
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   headline: {
//     fontSize: 17,
//     lineHeight: 22,
//     fontWeight: '500',
//     letterSpacing: 0.019,
//   },
//   title: {
//     letterSpacing: 0.011,
//     fontWeight: '700',
//   },
//   scroll: {
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   searchContainer: {
//     marginTop: 15,
//     marginLeft: 20,
//     marginRight: 20,
//     backgroundColor: iOSColors.lightGray,
//     height: SEARCH_BAR_HEIGHT,
//     left: 0,
//     right: 0,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   search: {
//     padding: 10,
//     opacity: 0,
//   },
//   children: {
//     flex: 1,
//   },
//   defaultButton: {
//     color: iOSColors.blue,
//   },
// })

// export default HeaderScrollView