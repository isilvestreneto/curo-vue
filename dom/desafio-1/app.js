new Vue({
    el: '#desafio',
    data: {
        nome: 'Ivan',
        dataNascimento: new Date(1995, 9, 30)
    },
    computed: {
        idade: function () {
            return new Date().getFullYear() - this.dataNascimento.getFullYear();
        }
    },
    methods: {
        title: function () {
            return `Usando VueJS — ${this.nome} (${this.idade})`;
        },
        carregar0ou1: function () {
            return Math.round(Math.random());
        },
        getImagemAleatoria: function () {
            return `https://picsum.photos/400/400`;
        }
    }
});
