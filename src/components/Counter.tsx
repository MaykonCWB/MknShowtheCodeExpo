/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Screen } from './Screen/Screen';
import {Text} from 'react-native';
import {PasswordInput} from '../components/PasswordInput/PasswordInput';
import {Button} from '../components/Button/Button';
import { TextInput } from './TextInput/TextInput';


const Counter: React.FC = () => {



    return (
        <Screen scrollable>

<Text >
        Olá
      </Text>
      <Text >
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
      
      {/* <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" /> */}
    </Screen>

    )

}




export default Counter;