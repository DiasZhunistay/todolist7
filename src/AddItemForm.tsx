import { Button, IconButton, TextField } from '@material-ui/core';
import { ControlPoint } from '@material-ui/icons';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField value={title}
               variant={'outlined'}
               label={'Type value'}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               error={!!error}
               helperText={error}

        />
        <IconButton onClick={addItem} color={'primary'}>
            <ControlPoint/>    
        </IconButton>
      </div>
}
