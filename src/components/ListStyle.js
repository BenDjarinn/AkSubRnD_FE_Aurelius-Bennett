import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`


export const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: .5rem;
    width: fit-content;
    min-width: 5rem;
    align-self: flex-end;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: darkred;
    }
`
export const EditButton = styled.button`
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    padding: .5rem;
    width: fit-content;
    min-width: 5rem;
    align-self: flex-end;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: darkgreen;
    }
`

