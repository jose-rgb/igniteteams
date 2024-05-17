import { Header } from '@components/Header';
import { Container, Form } from './styles';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';


export function Players() {
    return(
        <Container>
            <Header showBackButton/>

            <Highlight 
                title="Nome da turma"
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add"/>
            </Form>
        </Container>
    );
}