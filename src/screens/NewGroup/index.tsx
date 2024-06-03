import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '@storage/group/groupCreate';

import { Container, Content, Icon } from './styles';

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';


export function NewGroup() {
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function handleNew() {
        try {

            await groupCreate(group);
            navigation.navigate('players', {group: group});

        } catch (error) {
          console.log(error)
        }
    }

    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <Highlight title="Nova turma" subtitle="crie a turma para adicionar pessoas"/>

                <Input 
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button title="Criar" onPress={handleNew}/>
            </Content>
        </Container>
    );
}