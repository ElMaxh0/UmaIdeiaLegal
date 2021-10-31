import styled from "styled-components";
const Container = styled.div `
background-color: #f0db4f;
height:100vh;
width:100vw;
overflow-y:hidden;


`
const StormEffect = styled.div `
{
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1431352832634-845fad190fbd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ec80c41e488dc2b99ed543df2f3f0919');
  background-position: center center;
  background-origin: content-box;
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
}
&.flashit{
    -webkit-animation: flash ease-out 7s infinite;
    -moz-animation: flash ease-out 7s infinite;
    -webkit-filter: brightness(3);
    filter: brightness(3);
    -o-filter: brightness(3);
    -moz-filter: brightness(3);
    animation: flash ease-out 6s infinite;
    animation-delay: 2s;
    }
    
    @-webkit-keyframes flash {
        from { opacity: 0; } 
      92% { opacity: 0; }
        93% { opacity: 0.6; }
      94% { opacity: 0.2; }
      96% { opacity: 0.9; } 
        to { opacity: 0; }
    }
    
    @keyframes flash {
        from { opacity: 0; } 
        92% { opacity: 0; }
        93% { opacity: 0.6; }
        94% { opacity: 0.2; }
        96% { opacity: 1; } 
        to { opacity: 0; }
    }
  `
const GlassEffect= styled.div `
    height: 100%;
    width: 100%;
    background-image: url();
    background-size: cover;
    background-position: center;
    clip-path: inset(10em);
    filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat:no-repeat;
	@include background-size(cover);
	background-attachment: fixed;
    z-index: 1;
   `
const GlassContent= styled.div `
position: absolute;
z-index: 5;
color: white;
font-size: 4em;
letter-spacing: 0.75em;
padding-left: 0.375em;
`
const Title = styled.h1 `
justify-content: center;
font-size: 121px;
align-items: center;
align-items: center;
align-content: center;
text-align: end;

`
export{
    Title,Container,
    GlassEffect,
    GlassContent,
    StormEffect
}