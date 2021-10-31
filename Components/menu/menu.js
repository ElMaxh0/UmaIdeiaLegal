import styled from "styled-components";
const MenuStyle = styled.nav `
    background-color: rgba(18, 233, 79, 0.91);
    border-radius: 10px;

 & h1{
    color: #efefee;
}
 & ul {
    max-width: 800px;
    list-style: none;
    padding: 0;
}

 & ul li {
    display: inline;
}

 & ul li a {
    color: #FFF;
    padding: 20px;
    display: inline-block;
    text-decoration: none;
    transition: background .4s;
    border-radius: 5%;
    
}

 & ul li a:hover {
    background-color: rgb(0, 255, 85);
    border-radius: 10%;
    transform: scale(1.2);
}

 & ul li:last-child a {
    float: right;
    background-color: rgb(9, 211, 150);
    border-radius: 10%;
}`
export{
    MenuStyle
}