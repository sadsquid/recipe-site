import React, { PureComponent } from 'react';
import './ContainerFrame.css';

export default class ContainerFrame extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className={'ContainerFrame'}>{children}</div>;
  }
}
