import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";
import {Map} from '../map';
import * as PropTypes from 'prop-types';

export class DragZoom extends React.Component<any, any> {

  interaction: ol.interaction.DragZoom;

  options: any = {
    className: undefined,
    condition: undefined,
    duration: undefined,
    out: undefined
  };

  events: any = {
    'boxdrag': undefined,
    'boxend': undefined,
    'boxstart': undefined,
    'change': undefined,
    'change:active': undefined,
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
    console.log('options', options);
    this.interaction = new ol.interaction.DragZoom(options);
    this.context.mapComp.interactions.push(this.interaction)

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.interaction.on(eventName, olEvents[eventName]);
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps !== this.props){
      this.context.mapComp.map.removeInteraction(this.interaction);
      let options = Util.getOptions(Object['assign'](this.options, nextProps));
      this.interaction = new ol.interaction.DragZoom(options);
      this.context.mapComp.map.addInteraction(this.interaction);

      let olEvents = Util.getEvents(this.events, this.props);
      for(let eventName in olEvents) {
        this.interaction.on(eventName, olEvents[eventName]);
      }
    }
  }

  componentWillUnmount () {
    this.context.mapComp.map.removeInteraction(this.interaction);
  }

}
