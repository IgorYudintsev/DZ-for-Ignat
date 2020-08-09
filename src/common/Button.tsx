import React from "react";
import './Button.styles.css'

type ButtonPropsType = {
    title: string
    callback: () => void
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button className={props.title==='delete'?'orangeButton': 'universalButton'}
                onClick={props.callback}>{props.title}</button>
    )
}
