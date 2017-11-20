import * as React from 'react';
import * as ol from 'openlayers';
import { Util } from "../util";
import { Map } from '../map';
import * as PropTypes from 'prop-types';

export class Heatmap extends React.Component<any, any> {

  layer: ol.layer.Heatmap;

  options: any = {
    gradient: undefined,
    radius: undefined,
    blur: undefined,
    shadow: undefined,
    weight: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    opacity: undefined,
    source: undefined,
    visible: undefined
  };

  events: any = {
    'change': undefined,
    'change:blur': undefined,
    'change:extent': undefined,
    'change:gradient': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:radius': undefined,
    'change:source': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  static contextTypes = {
    mapComp: PropTypes.instanceOf(Object),
    map: PropTypes.instanceOf(ol.Map)
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount() {
    this.options = {...this.options, ...this.props};
    let options = Util.getOptions(this.options);
    this.layer = new ol.layer.Heatmap(options);
    if(this.props.zIndex){
      this.layer.setZIndex(this.props.zIndex);
    }
    this.context.mapComp.layers.push(this.layer);

    let olEvents = Util.getEvents(this.events, this.props);
    for (let eventName in olEvents) {
      this.layer.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.options = {...this.options, ...this.props};
    let options = Util.getOptions(this.options);
      this.context.mapComp.map.removeLayer(this.layer);
      this.layer = new ol.layer.Heatmap(options);
      if (this.props.zIndex) {
        this.layer.setZIndex(this.props.zIndex);
      }
      this.context.mapComp.map.addLayer(this.layer);

      let olEvents = Util.getEvents(this.events, this.props);
      for (let eventName in olEvents) {
        this.layer.on(eventName, olEvents[eventName]);
      }
    }
  }

  componentWillUnmount() {
    this.context.mapComp.map.removeLayer(this.layer);
  }

}
