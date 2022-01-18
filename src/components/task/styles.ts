import styled from "styled-components";

export const Container = styled.div`
height: 50px;
margin-bottom: 8px;
padding: 0 10px;
background-color: rgba(0,0,0,0.2);
border-radius: 4px;
border-left: 5px solid white;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const Controls = styled.div`
width: 86px;
display: flex;
justify-content: space-between;
`

export const Button = styled.button`
border: none;
color: white;
cursor: pointer;
background-color: transparent;
`

export const Text = styled.span`
margin-left: 8px;
color: rgba(255,255,255,0.7);
`