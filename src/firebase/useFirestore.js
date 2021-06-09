import {useState, useEffect} from 'react';
import {projectDatabase} from './config';

const useFirestore = (collection, category, sorttype)=>{
    const [docs, setDocs] = useState([]);
    
    useEffect(()=>{
        const unsub = projectDatabase.collection(collection).where("category","==",category?category:'CONSTRUCTION').orderBy(sorttype?sorttype:'createdAt')
        .onSnapshot((snap)=>{
            let documents = []
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id})
            })
            setDocs(documents);
        })

        return ()=> unsub();
    },[collection, category, sorttype])

    return {docs}
}



export default useFirestore;