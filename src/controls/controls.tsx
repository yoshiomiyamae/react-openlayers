import * as React from 'react';
import * as ol from 'openlayers';
import * as PropTypes from 'prop-types';

import {Util} from '../util';

// I wish I can name it as 'layers', not 'Layers'
export class Controls extends React.Component<any, any> {

  options: any = {
    attribution  : undefined,
    attributionOptions: undefined,
    rotate: undefined,
    rotateOptions: undefined,
    zoom: undefined,
    zoomOptions: undefined
  };

  static contextTypes = {
    map: PropTypes.instanceOf(ol.Map)
  };

  constructor(props) {
    super(props);
    this.options = Util.getOptions(Object['assign'](this.options, this.props));
  }

  render() {
    return (<div>{this.props.children}</div>);
  }

  componentDidMount () {}

  componentWillUnmount () {}
}
