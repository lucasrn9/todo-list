import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 300px;
margin-bottom: 20px;
padding: 5px 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 4px;
background-color: rgba(255,255,255,0.2);
`

export const Title = styled.p`
font-size: 18px;
color: white;
font-weight: bold;
`

export const TimerText = styled.p`
font-size: 66px;
font-family: ${(props)=>props.theme.fonts.secondary};
color: white;
font-weight: bold;
`

export const Button = styled.button`
width: 40%;
height: 45px;
border: none;
color: ${(props)=>props.theme.colors.primary};
background-color: white;
font-family: ${(props)=>props.theme.fonts.secondary};
font-weight: bold;
font-size: 20px;
border-radius: 4px;
box-shadow: 8px 4px 4px rgba(0,0,0,0.05);
cursor: pointer;
`