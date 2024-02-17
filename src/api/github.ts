import axios from 'axios';

export const fetchGithubData = async () => {
    try {
        const username = 'MaykonCWB';
        const reponse = await axios.get(`https://api.github.com/users/${username}`);
        return reponse.data;
    } catch (error) {
        throw new Error('Erro ao buscar dados do GitHub');
    }
}