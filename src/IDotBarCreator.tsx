import React, { Fragment } from "react";
import { useStyle } from "./hooks";
import withContext from "./withContext";

interface IDBCProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : () => void 
}
const IDotBarCreator = (props : IDBCProps) => {
    const {barStyle, dotStyle} = useStyle(props.w, props.h, props.scale)
    return (<Fragment>
        <div style = {barStyle()}>
        </div>
        <div style = {dotStyle()}>
        </div>
    </Fragment>)
}

export default withContext(IDotBarCreator)