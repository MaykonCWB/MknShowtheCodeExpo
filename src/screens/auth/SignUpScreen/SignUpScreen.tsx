import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import ArrowLeftIcon from '../../../../src/assets/icons/ArrowLeftIcon';


export function SignUpScreen() {
  function submitForm() {
    console.log('submitForm');
  }

  return (
    <Screen canGoBack scrollable>
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