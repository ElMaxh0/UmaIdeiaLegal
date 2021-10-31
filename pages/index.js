import React, { useState } from "react";
import { Menu } from "../Components/menu/menu";
import { Container, GlassContent, GlassEffect, StormEffect, Title } from "../styled";


function Home (){
    
    //Relogio 
    function clock(){
    var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
    function harold(standIn) {
        if (standIn < 10) {
        standIn = '0' + standIn
        }
        return standIn;
    }
    return harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    }
    var clock = clock()
    //Voce esta a ... Segs Nesta Pagina 
    const [counter, setCounter]= useState(0);
    function update(){
        setCounter((counter+1));
    }
    setTimeout(
        function() {
            update()
        },
        1000
    );


    return (
        <div>
            <Container style={{
            backgroundColor :`rgba(251, 251, 239, 71%);`,
            fontSize:(100/10)+"vh",
            justifyContent :"center",
            textAlign:"end",
        }}>
            <div>
                    <Title  style={{
                    color: `rgba(${RandonStyleParamters(255)},${RandonStyleParamters(255)},${RandonStyleParamters(255)},${RandonStyleParamters(100)}%);`
                }}>Uma Ideia Legal</Title>
                <p style={{
                    textAlign:"center",
                    color: `rgba(${RandonStyleParamters(255)},${RandonStyleParamters(255)},${RandonStyleParamters(255)},${RandonStyleParamters(100)}%);`
                }} onClick={() => setCounter((counter+1))}>Voce esta a {counter} segundos nesta Pagina </p>
                <p style={{
                    textAlign:"center",
                }}>{clock}</p>
            </div>
        </Container>
        </div>
        
    )
}


export function RandomicStyle (){
    const [red, setRed]= useState(1);
    const [green, setGreen]= useState(1);
    const [blue, setBlue]= useState(1);
    const Style = `rgba(${red},${green},${blue},0.9)`
    return String(Style)
}

function RandonStyleParamters(max){
    var p=Math.floor(Math.random() * max + 1)
    return p
    
}
export default Home