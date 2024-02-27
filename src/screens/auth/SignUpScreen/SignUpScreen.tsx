import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {ProfileIcon} from '../../../../src/assets/icons/ProfileIcon';

import {ArrowLeftIcon} from '../../../assets/icons/ArrowLeftIcon'
import { View } from 'react-native';

import Svg from 'react-native-svg';




export function SignUpScreen() {
  function submitForm() {
    console.log('submitForm');
  }

  return (
    <Screen  scrollable>
      <View style={{alignItems: 'center'}}>

      {/* <ArrowLeftIcon  color="primary" size={24} /> */}
    </View>

      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}

export default SignUpScreen;