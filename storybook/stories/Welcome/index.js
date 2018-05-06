import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp(event) {
    event.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Project Storybook</Text>
        <Text style={this.styles.content}>
          Access the menu and Have a Fun ;)
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
