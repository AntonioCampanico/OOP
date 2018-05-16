function Pessoa(nomeCompleto, idade, telemovel) {
    this.nome = nomeCompleto,
    this.anos = idade,
    this.modelo = telemovel
    this.saudacao = function() {
        console.log("Olá, o meu nome é " + this.nome + ", tenho " + this.anos + " anos e o modelo do meu telemóvel é " + this.modelo);
    }
}

var andré = new Pessoa("André costa", "17", "Huawei P8 Lite");
andré.saudacao();

var António = new Pessoa("António Lourenço", "17", "WIKO Jimmy");
António.saudacao();

var Beatriz = new Pessoa("Beatriz Barreto", "17", "iPhone 6");
Beatriz.saudacao();

var FranciscoE = new Pessoa("Francisco Esteves", "17", "Huawei Ascend G7");
FranciscoE.saudacao();

var FranciscoR = new Pessoa("Francisco Rodrigues", "17", "IPhone 5");
FranciscoR.saudacao();

var Daniel = new Pessoa("Daniel Serrano", "17", "IPhone 5S");
Daniel.saudacao();

var Fábio = new Pessoa("Fábio Franco", "17", "WiKO UFeel Prime");
Fábio.saudacao();

var JoãoN = new Pessoa("João Neves", "17", "Samsung S8+");
JoãoN.saudacao();

var JoãoM = new Pessoa("João Madeira", "17", "Xiao Mi redmi Note 4x");
JoãoM.saudacao();

var Gonçalo = new Pessoa("Gonçalo Simão", "18", "Wiko Fever 4G");
Gonçalo.saudacao();

var Luís = new Pessoa("Luís Catarino", "17", "Wiko Pulp Fab");
Luís.saudacao();

var MiguelP = new Pessoa("Miguel Pinto", "17", "Wiko Pulp Fab");
MiguelP.saudacao();

var Maria = new Pessoa("Maria Inês Sousa (Tratada por Mines)", "17", "iPhone SE");
Maria.saudacao();

var Nuno = new Pessoa("Nuno Rodrigues", "17", "Huawei P9 Lite");
Nuno.saudacao();

var Pedro = new Pessoa("Pedro Fonseca", "17", "Vodafone Smart V8");
Pedro.saudacao();

var MiguelD = new Pessoa("Miguel Dionísio", "17", "Alcatel Pop 4 Plus");
MiguelD.saudacao();

var RicardoG = new Pessoa("Ricardo Gonçalves", "17", "Huawei P8 Lite");
RicardoG.saudacao();

var Sandu = new Pessoa("Sandu Lungu", "17", "Alcatel One Touch 7041X");
Sandu.saudacao();

var Ricardo = new Pessoa("Ricardo Pereira", "17", "Nokia 5");
Ricardo.saudacao();

var Rodrigo = new Pessoa("Rodrigo Valério", "17", "Huawei G Play mini");
Rodrigo.saudacao();

var Samuel = new Pessoa("Samuel Vaz", "17", "Huawei P8 lite 2017");
Samuel.saudacao();

var Tomás = new Pessoa("Tomás Feith", "17", "Samsung Galaxy Core Prime");
Tomás.saudacao();

var Tiago = new Pessoa("Tiago Arriegas", "17", "Coolpad");
Tiago.saudacao();

var AntónioC = new Pessoa("António Campaniço", "17", "Samsung Galaxy Grand Prime");
AntónioC.saudacao(); 