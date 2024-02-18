import React, { useState } from 'react';
import { Button} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement,fetchData } from '../store/actions';
import * as S from './styles';

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.count);
    const blogUrl = useSelector((state: any) => state.blogUrl);
    const [loginName, setLoginName] = useState('');

    return (
        <S.Container>
            <S.CounterText>{count}</S.CounterText>
            <Button title="Increment" onPress={() => dispatch(increment())}/>
            <Button title="Decrement" onPress={() => dispatch(decrement())}/>
            <S.Input
                placeholder="Digite aqui seu nome de usuario no Github"
                value={loginName} 
                onChangeText={(text: string) => setLoginName(text)}
            />
            <Button 
                title='Chama API do GitHub' 
                onPress={() => dispatch(fetchData(loginName))}
                />

            {blogUrl && <S.BlogText>{blogUrl}</S.BlogText>}
        </S.Container>
    )

}




export default Counter;