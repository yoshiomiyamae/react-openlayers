import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ol from 'openlayers';
import {Util} from './util';
import {Map} from './Map';
import * as PropTypes from 'prop-types';

export class Overlay extends React.Component<any, any> {
  overlay: ol.Overlay;
  el: HTMLElement;

  options: any = {
    id: undefined,
    element: undefined,
    offset: undefined,
    position: undefined,
    stopEvent: undefined,
    insertFirst: undefined,
    autoPan: undefined,
    autoPanAnimation: undefined,
    autoPanMargin: undefined
  };

  events: any = {
    'change': undefined,
    'change:element': undefined,
    'change:map': undefined,
    'change:offset': undefined,
    'change:position': undefined,
    'change:positioning': undefined,
    'propertychange': undefined
  };

  static contextTypes = {
    mapComp: PropTypes.instanceOf(Object),
    map: PropTypes.instanceOf(ol.Map)
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  componentDidMount () {
    this.options = {...this.options, ...this.props};
    let options = Util.getOptions(this.options);
    options.element = ReactDOM.findDOMNode(this).querySelector('div');
    // console.log('options.element', options.element);
    this.overlay = new ol.Overlay(options);
    this.context.mapComp.overlays.push(this.overlay);
  }
}
