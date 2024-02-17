import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement,fetchData } from '../store/actions';
import styled from 'styled-components/native';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #b7b7b7;
`
const CounterText = styled.Text`
    font-size: 24px;
    color: red;
`

const BlogText = styled.Text`
    font-size: 16px;
    margin-top: 20px;
    color: green;
`

// const Input = styled.TextInput`
//     height: 40px;
//     width: 200px;
//     border: 1px solid #000;
//     margin-bottom: 10px;
//     padding: 10px;
// `


const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.count);
    const blogUrl = useSelector((state: any) => state.blogUrl);
    //const [login, setLogin] = useState('');

    return (
        <Container>
            <CounterText>{count}</CounterText>
            <Button title="Increment" onPress={() => dispatch(increment())}/>
            <Button title="Decrement" onPress={() => dispatch(decrement())}/>
            {/* <Input
                placeholder="Usuário do GitHub"
                value={login} 
                onChangeText={(text: string) => setLogin(text)}
            /> */}
            <Button 
                title='Chama API do GitHub' 
                onPress={() => dispatch(fetchData())}
            />

            {blogUrl && <BlogText>{blogUrl}</BlogText>}
        </Container>
    )

}




export default Counter;