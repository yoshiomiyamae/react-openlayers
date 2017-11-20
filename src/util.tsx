import * as React from 'react';

export namespace Util {
  export const getOptions = (props: any): any => {
      let options: any = {};
      for(let key in props) {
        if (
          key !== 'children'
          && typeof props[key] !== 'undefined' //exclude undefined ones
          && !key.match(/^on[A-Z]/)     //exclude events
        ) {
          options[key] = props[key];
        }
      }
      return options;
    }

  export const getPropsKey = (eventName: string): string => {
    return 'on' + eventName
      .replace(/(\:[a-z])/g, $1 => $1.toUpperCase())
      .replace(/^[a-z]/, $1 => $1.toUpperCase())
      .replace(':','')
  }

  export const getEvents = (events: {}={}, props: {}={}): any => {
    let prop2EventMap: {} = {};
    for(let key in events) {
      prop2EventMap[getPropsKey(key)] = key;
    }

    let ret = {};
    for(let propName in props) {
      let eventName = prop2EventMap[propName];
      let prop = props[propName];
      if (typeof prop !== 'undefined' && propName.match(/^on[A-Z]/) && eventName) {
        ret[eventName] = prop;
      }
    }

    return ret;
  }

  export const typeOf = (obj) => {
      return ({}).toString.call(obj)
          .match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  export const cloneObject = (obj) => {
    let type = typeOf(obj);
    if (type == 'object' || type == 'array') {
      if (obj.clone) {
        return obj.clone();
      }
      let clone = type == 'array' ? [] : {};
      for (let key in obj) {
        clone[key] = cloneObject(obj[key]);
      }
      return clone;
    }
    return obj;
  }

  export const findChild = (children: any[], childType: string) => {
    let found: any;
    let childrenArr = React.Children.toArray(children);
    for (let i=0; i<childrenArr.length; i++) {
      let child: any = childrenArr[i];
      if (child.type.name == childType){
        found = child;
        break;
      }
    }
    return found;
  }
}

export default Util;
