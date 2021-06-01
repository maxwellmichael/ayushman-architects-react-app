import {useState, useEffect} from 'react';
import {projectDatabase} from './config';

const useFirestore = (collection)=>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = projectDatabase.collection(collection)
        .onSnapshot((snap)=>{
            let documents = []
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id})
            })
            setDocs(documents);
        })

        return ()=> unsub();
    },[collection])

    return {docs}
}

export default useFirestore;