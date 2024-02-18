import axios from 'axios';

export const fetchGithubData = async (loginName: string) => {
    try {

        const reponse = await axios.get(`https://api.github.com/users/${loginName}`);
        return reponse.data;
    } catch (error) {
        throw new Error('Erro ao buscar dados do GitHub!');
    }
}