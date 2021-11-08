import styled from 'styled-components'
import React from 'react'
import { Send } from '@material-ui/icons'
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #eddcd2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
const Title = styled.h1`
font-size: 70px;
margin-bottom:20px ;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin-top: 10px;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #8d99ae;
  color: white;
`;

export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Subscribe to our Newsletters to get updates on our latest offers</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button> <Send/> </Button>
            </InputContainer>
        </Container>
    )
}
