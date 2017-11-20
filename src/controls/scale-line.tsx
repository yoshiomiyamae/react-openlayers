import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';
import {Map} from '../map';
import * as PropTypes from 'prop-types';

export class ScaleLine extends React.Component<any, any> {

  control: ol.control.ScaleLine;

  options: any = {
    className: undefined,
    minWidth: undefined,
    render: undefined,
    target: undefined,
    units: undefined
  };

  events: any = {
    'change': undefined,
    'change:units': undefined,
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
    this.control = new ol.control.ScaleLine(options);
    this.context.mapComp.controls.push(this.control)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}
