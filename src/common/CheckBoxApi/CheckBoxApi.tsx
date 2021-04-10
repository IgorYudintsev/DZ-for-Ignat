import React, {ChangeEvent, useState} from 'react';
// import {Api} from "./Api";
//import axios from "axios";
import {Api} from "./Api";
import styles from './CheckBoxApi.module.css'

export const CheckBoxApi = () => {
    let [newValue, setNewValue] = useState('')
    //
    // axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: true})
    //     .then((res) =>
    //         setNewValue(res.data.info)
    //     )

    // Api.getApi().then((res) => {
    //         let resInfo = res.data.info;
    //         setNewValue(res.data.info)
    //     }
    // )
    let CheckBoxArray = ['true', 'false'];

    let [value, setValue] = useState<string | undefined>('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
        console.log(value)
    }
    let onClickHandler=()=>{
        Api.getApi()
            .then((res) => {
                let resInfo = res.data.info;
                if(value==='true'){
                    setNewValue(res.data.info)
                }
                else{
                    setNewValue('Nu i naher ty eto sdelal?')
                }

            },
        )
            .catch( ()=>{
                setNewValue('NU PROSTO PIZDEC!')
            })

    }
    return (
        <div className={styles.grandDiv}>
            <div className={styles.toCheckBox}>
                <p>CheckBOX</p>
                {CheckBoxArray.map(m =>
                    <p>
                        <label>
                            <input type="radio" name="gender" value={m} onChange={onChangeHandler}/>
                            {m}
                        </label>
                    </p>
                )}
                <button onClick={onClickHandler}>send</button>
                <p></p>
                <div>request: {newValue}</div>
            </div>
        </div>
    )
}

