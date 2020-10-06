import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loadre";

export const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    /*
    ** Создание тестового массива для рендера списка
    const notes = new Array(6)
                .fill('')
                .map((_, i) => ({id: i, title: `Note ${i + 1}`}))
     */

    return (
        <Fragment>
            <Form />

            <hr/>

            {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote}/>}
        </Fragment>
    )
}