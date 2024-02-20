import React, { useState } from 'react';
import {  Text, ScrollView, SafeAreaView, } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement,fetchData } from '../store/actions';
import { Button } from './Button/Button';
import * as S from './styles';
import { TextInput } from './TextInput/TextInput';


  interface State {
    count: number;
    blogUrl: string;

  }

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: State) => state.count);
    const blogUrl = useSelector((state: State) => state.blogUrl);
    const [loginName, setLoginName] = useState('');


    return (
        <SafeAreaView>
            <ScrollView>
                <S.View>
                    <Button title="+" onPress={() => dispatch(increment())}/>
                    <S.CounterView>
                        <S.CounterText>{count}</S.CounterText>
                    </S.CounterView>
                    <Button title="-" onPress={() => dispatch(decrement())}/>
                

                    <TextInput  
                        label="Nome de usuario no Github" 
                        value={loginName} errorMessage="Digite um nome de usuario" 
                        onChangeText={(text: string) => setLoginName(text)} />

                    <Button title="Chama API do GitHub" onPress={() => dispatch(fetchData(loginName))}/>

                        <Text>{blogUrl}</Text>



                    <S.View>
                        <S.TextContainer>
                            <Text>
                                
                            </Text>
                        </S.TextContainer>
                    </S.View>

                </S.View>

            </ScrollView>
        </SafeAreaView>

    )

}




export default Counter;