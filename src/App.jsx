import React,{useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux" ;
import i18n from "./Language/i18n"
import './App.css'
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import {setLang} from "./langSlice";

function App(){

    const lang=useSelector((state)=> state.lang.value);
    const dispatch = useDispatch();

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang]);

    useEffect(()=>{
        dispatch(setLang(i18n.language))
    },[dispatch])

    return(
        <div className="app">
            <Nav />

            <main>
                <Outlet />
            </main>

            <Footer/>
        </div>
    )
}

export default App