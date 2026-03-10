console.log('Olá pessoas! - Nível 2')
console.log('#ConstruindoCRUDS')

// [CRUD] JavaScript BÁSICO
const miniX = {
    usuarios: [
        {
            username: 'leoheith'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'leoheith',
            content: 'Meu primeiro tweet'
        }
    ],
};

// CREATE
function criaPost(dados) {
    miniX.posts.push({
        id: miniX.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'leoheith', content: 'Segundo tweet' });
criaPost({ owner: 'leoheith', content: 'Terceiro tweet' });
// console.log(miniX.posts)

// READ
function pegaPosts() {
    return miniX.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost('Novo conteúdo do post')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniX.posts = listaDePostsAtualizada;
}
apagaPost(2);
console.log(pegaPosts())