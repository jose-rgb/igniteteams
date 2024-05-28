import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';


export function NewGroup() {
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    function handleNew() {
        navigation.navigate('players', {group: group});
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