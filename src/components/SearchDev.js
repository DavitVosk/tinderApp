import React, { Component } from 'react';
import { View, Text, PanResponder, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.5;

class SeachDev extends Component {
	constructor (props) {
		super(props);

		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({ x: gesture.dx, y: gesture.dy })
			},
			onPanResponderRelease: (event, gesture) => {
				if ( gesture.dx > SWIPE_THRESHOLD ) {
					this.forceSwipe('right');
				} else if ( gesture.dx < - SWIPE_THRESHOLD ) {
					this.forceSwipe('left');
				} else {
					this.resetPosition();
				}
			}
		});

		this.state = { panResponder, position, index: 0 };
	}

	resetPosition(){
		Animated.spring(this.state.position, {
			toValue: { x: 0, y: 0 }
		}).start();
	}

	forceSwipe(dir){
		const x = dir === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
		Animated.timing(this.state.position, {
			toValue: { x, y: 0 },
			duration: 10
		}).start(() => this.onSwipeComplete());
	}

	onSwipeComplete(){
		this.state.position.setValue({ x: 0, y: 0 });
		this.setState({ index: this.state.index + 1 })
	}

	getCardStyle () {
		const { position } = this.state;
		const rotate = position.x.interpolate({
			inputRange: [- SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-120deg', '0deg', '120deg']
		});

		return {
			...position.getLayout(),
			transform: [{ rotate }]
		}
	}

	renderCards () {
		return (
			this.props.data.map((item, i) => {
				if ( i < this.state.index ) {
					return null;
				}

				if ( i === this.state.index ) {
					return (
						<Animated.View
							key={item.id}
							style={[this.getCardStyle(), { zIndex: 99, }]}
							{...this.state.panResponder.panHandlers}>
							{this.props.renderCard(item)}
						</Animated.View>
					);
				}

				return (
					<Animated.View
						key={item.id}
						style={[styles.cardStyle, { zIndex: 5, top: 10 * (i - this.state.index) }]}>
						{this.props.renderCard(item)}
					</Animated.View>
				)
			}).reverse()
		)
	}

	render () {
		return (
			<View>
				{this.renderCards()}
			</View>
		)
	}
}

const styles = {
	cardStyle: {
		position: 'absolute',
		width: SCREEN_WIDTH,
	}
};

export default SeachDev;