import React, { useState } from 'react';
import {  Text,SafeAreaView, ScrollView, } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement,fetchData } from '../store/actions';
import StyledButton from './StyledButton';
import * as S from './styles';
import StyledInput from './StyledInput';

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.count);
    const blogUrl = useSelector((state: any) => state.blogUrl);
    const [loginName, setLoginName] = useState('');
    const data = useSelector((state: any) => state.data);

    return (
    <S.BCground>
        <S.Container>
            <SafeAreaView>
                    <ScrollView>
                        <S.View>
                            <StyledButton text="+" onPress={() => dispatch(increment())}/>
                            <S.CounterView>
                                <S.CounterText>{count}</S.CounterText>
                            </S.CounterView>
                            <StyledButton text="-" onPress={() => dispatch(decrement())}/>
                        

                            <StyledInput
                                placeholder="Digite aqui seu nome de usuario no Github"
                                value={loginName} 
                                onChangeText={(text: string) => setLoginName(text)}
                            />
                            <StyledButton 
                                title='Chama API do GitHub' 
                                onPress={() => dispatch(fetchData(loginName))}
                            />
                            <S.ViewGit  >
                                {blogUrl && <S.BlogText>{blogUrl}</S.BlogText>}
                            </S.ViewGit>

                            <S.View>
                                <S.TextContainer>
                                    <Text>
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nisl purus. Sed at neque felis. 
                                        Curabitur luctus risus sed neque egestas malesuada. Integer rutrum lorem sodales nibh ullamcorper egestas. 
                                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis 
                                        interdum sapien eget mollis. Nullam pharetra condimentum urna.
                                        Donec sed consectetur sem. Morbi convallis nec mauris non pulvinar. Cras id tempus odio, at gravida metus. 
                                        Sed ut rhoncus massa, in congue lacus. Cras pretium id augue in rhoncus. Quisque sed magna ac nunc posuere 
                                        luctus. Aenean leo ipsum, aliquam eu egestas ac, convallis vitae quam. Donec eget auctor eros. Praesent eu 
                                        rutrum lorem. Duis pulvinar molestie lorem quis faucibus. Pellentesque habitant morbi tristique senectus et 
                                        netus et malesuada fames ac turpis egestas. Nam sit amet ornare urna. Cras tempus quis est in tincidunt.
                                        In sollicitudin velit vel turpis aliquam, a porta velit vulputate. Sed augue ipsum, feugiat semper rutrum 
                                        tempor, semper gravida augue. Suspendisse sit amet est in arcu aliquam malesuada. Phasellus egestas neque ut 
                                        eros consectetur eleifend at sed velit. Mauris luctus, enim nec aliquam blandit, enim felis auctor tellus, 
                                        vel tempor odio quam et nisl. Maecenas quis augue neque. Quisque a velit erat. Curabitur accumsan nulla quis 
                                        mi iaculis, et molestie elit efficitur. Nullam tristique diam bibendum ultricies mattis. Nulla vulputate blandit 
                                        enim, sit amet imperdiet quam hendrerit nec. Donec et malesuada felis. Nunc vel porta ex. Aliquam euismod pulvinar 
                                        felis at laoreet. Nam consequat erat quis pulvinar pellentesque.'
                                    </Text>
                                </S.TextContainer>
                            </S.View>

                        </S.View>

                    </ScrollView>
            </SafeAreaView>
        </S.Container>
    </S.BCground>
    )

}




export default Counter;