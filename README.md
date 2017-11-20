# Yet Another react-openlayers

A minimal [React](https://facebook.github.io/react/)
wrapper of [OpenLayer 3+](https://openlayers.org/)
written in [TypeScript](https://www.typescriptlang.org/)

[![image](http://i.imgur.com/5JQcT8G.png)](https://rawgit.com/allenhwkim/react-openlayers/master/app/index.html)

## Description

This package is developed based on [react-openlayers](https://github.com/allenhwkim/react-openlayers).  
If you have no problem with the original package, please use that.

## Install

    yarn add react-openlayers

## Usage

    import {
      interaction, layer, custom, control, //name spaces
      Interactions, Overlays, Controls,     //group
      Map, Layers, Overlay, Util    //objects
    } from "react-openlayers";

Example
```
    <Map view={{center: [0, 0], zoom: 2}} onClick={showPopup}>
      <Layers>
        <layer.Tile/>
        <layer.Vector source={markers} style={markers.style} zIndex="1" />
      </Layers>
      <Overlays>
        <Overlay
          ref={comp => this.overlayComp = comp}
          element="#popup" />
      </Overlays>
      <Controls attribution={false} zoom={true}>
        <control.Rotate />
        <control.ScaleLine />
        <control.FullScreen />
        <control.OverviewMap />
        <control.ZoomSlider />
        <control.ZoomToExtent />
        <control.Zoom />
      </Controls>
      <Interactions>
        <interaction.Select style={selectedMarkerStyle} />
        <interaction.Draw source={markers} type='Point' />
        <interaction.Modify features={markers.features} />
      </Interactions>
    </Map>

    <custom.Popup ref={comp => this.popupComp = comp}>
    </custom.Popup>
```

It strictly follows [OpenLayer 3+ API documention](https://openlayers.org/en/latest/apidoc/)

## About Original Author
[Allen Kim](https://github.com/allenhwkim) is the creator of [ngmap](https://github.com/allenhwkim/angularjs-google-maps) and
[ng2-map](https://github.com/ng2-ui/ng2-map).

If you like this, you may also like [geo-coder](https://github.com/allenhwkim/geocoder).
