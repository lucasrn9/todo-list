import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 70px;
padding: 0 10px;
`
export const Text = styled.p`
font-size: 18px;
color: white;
font-weight: bold;
`

export const Wrapper = styled.div`
margin: auto;
display: flex;
width: 100%;
justify-content: space-between;
`

export const Input = styled.input`
width: 95%;
border: none;
border-bottom: 2px solid rgba(255,255,255,0.2);
background-color: transparent;
color: white;
outline: none;
&::placeholder{
    color: rgba(255,255,255,0.2);
}
`
export const Button = styled.button`
border: none;
color: white;
cursor: pointer;
background-color: transparent;
margin-left: 8px;
`

