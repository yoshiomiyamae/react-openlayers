import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';
import {Map} from '../map';
import * as PropTypes from 'prop-types';

export class FullScreen extends React.Component<any, any> {

  control: ol.control.FullScreen;

  options: any = {
    className: undefined,
    label: undefined,
    labelActive: undefined,
    tipLabel: undefined,
    keys: undefined,
    target: undefined,
    source: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  static contextTypes = {
    mapComp: PropTypes.instanceOf(Object),
    map: PropTypes.instanceOf(ol.Map)
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    this.options = {...this.options, ...this.props};
    let options = Util.getOptions(this.options);
    this.control = new ol.control.FullScreen(options);
    this.context.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}
