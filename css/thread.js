import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "convert-dates": {
        "position": "fixed",
        "right": 22,
        "bottom": 62,
        "border": "none",
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 20,
        "borderRadius": 20,
        "background": "#03A9F4",
        "color": "#fff",
        "cursor": "pointer"
    },
    "convert-dates:hover": {
        "background": "#2196F3"
    },
    "convert-dates:focus": {
        "background": "#2196F3"
    },
    "rtBody table": {
        "width": "95%",
        "border": "none"
    },
    "tdrtTextCell::before": {
        "content": "' '",
        "position": "absolute",
        "left": -11,
        "top": 31,
        "width": 0,
        "height": 0,
        "borderTop": "10px solid transparent",
        "borderBottom": "22px solid transparent",
        "borderRight": "10px solid #e7e7e7"
    },
    "tdrtTextCell::after": {
        "content": "' '",
        "position": "absolute",
        "left": -10,
        "top": 30,
        "width": 0,
        "height": 0,
        "borderTop": "10px solid transparent",
        "borderBottom": "22px solid transparent",
        "borderRight": "10px solid #fcfcfc"
    },
    "tablertTablertTablePost tr:first-child rtHeader": {
        "background": "transparent",
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 0,
        "paddingLeft": 130,
        "border": "none"
    },
    "rtTable rtPosterCell": {
        "background": "transparent",
        "border": "none"
    },
    "rtPosterSpacer": {
        "width": 100,
        "textAlign": "center"
    },
    "rtPosterSpacer img": {
        "borderRadius": "100%",
        "boxShadow": "0 2px 2px #ccc",
        "border": "1px solid #ccc"
    },
    "rtTable rtTextCell": {
        "width": "100%",
        "position": "relative",
        "verticalAlign": "top",
        "paddingLeft": 15,
        "paddingRight": 10,
        "borderRadius": 20,
        "border": "none",
        "boxShadow": "2px 4px 2px 0 #ccc"
    },
    "rtTable rtTextCellHlt": {
        "width": "100%",
        "position": "relative",
        "verticalAlign": "top",
        "paddingLeft": 15,
        "paddingRight": 10,
        "borderRadius": 20,
        "border": "none",
        "boxShadow": "2px 4px 2px 0 #ccc"
    }
});