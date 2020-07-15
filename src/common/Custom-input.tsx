import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    sendName: string
    setSendName: (value:string)=> void
    clickEnter: (value: string)=> void
}

export const CustomInput = (props:InputPropsType) => {

    const onChange = (event: ChangeEvent<HTMLInputElement>) => props.setSendName(event.currentTarget.value);

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.clickEnter(props.sendName)
        }
    };
    return (
        <input className={props.sendName ? 'universal' : 'error'} type="text" value={props.sendName}
               onChange={onChange}
               onKeyPress={onKeyPress}/>
    )
}